import React, { Component } from 'react';
import './ProjectLane.css';
import BranchCard from './BranchCard/BranchCard.js';
import Branch from '../../Branch.js';

class ProjectLane extends Component {
  constructor(props) {
    super(props);
    this.branchesToDisplay = [];
    this.loadBranches();
    this.state = {branchCards: ""};
  }
  componentDidMount() {
    this.setDevBranch();
    this.setBranchesToBeDisplayed(5);
  }

  loadBranches() {
    var gitHubBranches = this.props.apiClients["gitHub"].getBranchesForRepository(this.props.repository);
    this.branches = gitHubBranches.map((branch) => {
      return new Branch(branch["name"], this.props.repository, this.props.apiClients);
    });
  }

  setDevBranch() {
    const devCard = this.branches.filter((branch) => {
      return branch.isDeveloperBranch();
    })[0];
    this.setState({devCard: devCard});
    this.branchesToDisplay.push(devCard);
    this.branches.splice(this.branches.indexOf(devCard), 1);
  }

  setBranchesToBeDisplayed(n) {
    // Order branches by last execution time
    const orderedBranches = this.branches.sort((branch1, branch2) => {
      if(branch1.getLastCommitTime() < branch2.getLastCommitTime())
        return 1;
      if(branch1.getLastCommitTime() > branch2.getLastCommitTime())
          return -1;
        return 0;
    });
    // Select n most recent branches
    for (var ii = 0; ii <= n-1; ii++) {
      this.branchesToDisplay.push(orderedBranches[ii]);
    }
    // And create cards for them
    const branchCards = this.branchesToDisplay.map((branch) => {
      if (!branch)
        return null;
      return (
        <div className="col s2" key={branch.getName()} >
          <BranchCard branch={branch}/>
        </div>
      );
    });
    this.setState({branchCards: branchCards});
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
            {this.state.branchCards}
          </div>
        </div>
{
  // {branchCards.slice(0,5)}
        // <div className="vertical-text">
        //   This is a lane for project {this.props.projectKey}
        // </div>
}
      </div>
    );
  }
}

export default ProjectLane;
