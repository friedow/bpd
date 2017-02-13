import React, { Component } from 'react';
import './ProjectLane.css';
import BranchCard from './BranchCard/BranchCard.js';
import Branch from '../../Branch.js';

class ProjectLane extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var sonarqubeBranches = this.props.apiClients["sonarqube"].getBranchesForProject(this.props.projectKey);
    const branches = sonarqubeBranches.map((sonarqubeBranch) => {
      return new Branch(sonarqubeBranch, this.props.projectKey, this.props.apiClients);
    });
    var branchesToDisplay = [];
    console.log(branches);
    const devCard = branches.filter((branch) => {
      return branch.getKey().endsWith("dev") || branch.getKey().endsWith("developer");
    })[0];
    branchesToDisplay.push(devCard);
    branches.splice(branches.indexOf(devCard), 1);
    const orderedBranches = branches.sort((branch1, branch2) => {
      if(branch1.getLastExecutionTime() < branch2.getLastExecutionTime())
        return 1;
      if(branch1.getLastExecutionTime() > branch2.getLastExecutionTime())
          return -1;
        return 0;
    });
    for (var ii = 0; ii < 5; ii++) {
      branchesToDisplay.push(orderedBranches[ii]);
    }
    const branchCards = branchesToDisplay.map((branch) => {
      return (
        <div className="col s2" key={branch.getKey()} >
          <BranchCard projectKey={this.props.projectKey} branch={branch}/>
        </div>
      );
    });
    return (
      <div className="projectLane">
        <div className="row">
          <div className="col s1">
            <div className="card teal">
              <div className="card-content white-text">
                <span className="card-title">{this.props.projectKey}</span>
              </div>
            </div>
          </div>
          <div className="col s11">
            {branchCards}
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
