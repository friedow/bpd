import React, { Component } from 'react';
import BranchCard from './BranchCard/BranchCard.js';
import Branch from '../../Branch.js';
import './ProjectLane.css';

class ProjectLane extends Component {
  constructor(props) {
    super(props);
    this.state = {branches: []};
  }
  componentDidMount() {
    this.loadBranches();
  }

  loadBranches() {
    let gitHubBranches = this.props.apiClients["gitHub"].getBranchesForRepository(this.props.repository);
    let unsortedBranches = gitHubBranches.map((branch) => {
      return new Branch(branch["name"], this.props.repository, this.props.apiClients);
    });
    let sortedBranches = this.sortBranches(unsortedBranches).slice(0, 6);
    this.setState({branches: sortedBranches});
  }

  sortBranches(unsortedBranches) {
      return unsortedBranches.sort((branch1, branch2) => {
        if (branch1.isDeveloperBranch()) {
          return -9999999999999;
        }
        else if (branch2.isDeveloperBranch()) {
          return Number.MAX_VALUE;
        }
        return branch2.getLastCommitTime() - branch1.getLastCommitTime();
      });
  }

  render() {
    return (
      <div className="projectLane">
        <div className="row">
          <div className="col s1">
            <div className="card small teal">
              <div className="card-content white-text">
                <span className="card-title vertical-text">{this.props.repository.split("/")[1]}</span>
              </div>
            </div>
          </div>
          <div className="col s11">
              {this.state.branches.map((branch, index) =>
                <BranchCard key={index} branch={branch}/>
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectLane;
