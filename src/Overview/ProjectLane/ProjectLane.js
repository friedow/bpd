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
    var sonarqubeBranches = this.props.apiClients["sonarqube"].getBranchesForProject(this.props.projectKey);
    this.branches = sonarqubeBranches.map((sonarqubeBranch) => {
      return new Branch(sonarqubeBranch, this.props.projectKey, this.props.apiClients);
    });
  }

  setDevBranch() {
    const devCard = this.branches.filter((branch) => {
      return branch.getKey().endsWith("dev") || branch.getKey().endsWith("developer");
    })[0];
    this.setState({devCard: devCard});
    this.branchesToDisplay.push(devCard);
    this.branches.splice(this.branches.indexOf(devCard), 1);
  }

  setBranchesToBeDisplayed(n) {
    // Order branches by last execution time
    const orderedBranches = this.branches.sort((branch1, branch2) => {
      if(branch1.getLastExecutionTime() < branch2.getLastExecutionTime())
        return 1;
      if(branch1.getLastExecutionTime() > branch2.getLastExecutionTime())
          return -1;
        return 0;
    });
    // Select n most recent branches
    for (var ii = 0; ii <= n-1; ii++) {
      this.branchesToDisplay.push(orderedBranches[ii]);
    }
    // And create cards for them
    const branchCards = this.branchesToDisplay.map((branch) => {
      return (
        <div className="col s2" key={branch.getKey()} >
          <BranchCard projectKey={this.props.projectKey} branch={branch}/>
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
                <span className="card-title vertical-text">{this.props.projectKey.split(":")[1]}</span>
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
