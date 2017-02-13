import React, { Component } from 'react';
import './ProjectLane.css';
import BranchCard from './BranchCard/BranchCard.js';
import Branch from '../../Branch.js';

class ProjectLane extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var branches = this.props.apiClients["sonarqube"].getBranchesForProject(this.props.projectKey);

    var branchesToDisplay = [];
    branches = branches.map((branch) => {
      branch["componentId"] = this.props.apiClients["sonarqube"].getComponentIdForProject(branch["k"]);
      branch["lastExecutionTime"] = this.props.apiClients["sonarqube"].getLastExecutionForComponentId(branch["componentId"]);
      return branch;
    });
    const devCard = branches.filter((branch) => {
      return branch["k"].endsWith("dev") || branch["k"].endsWith("developer");
    })[0];
    branchesToDisplay.push(devCard);
    branches.splice(branches.indexOf(devCard), 1);
    const orderedBranches = branches.sort((branch1, branch2) => {
      if(branch1["lastExecutionTime"] < branch2["lastExecutionTime"])
        return 1;
      if(branch1["lastExecutionTime"] > branch2["lastExecutionTime"])
          return -1;
        return 0;
    });
    for (var ii = 0; ii < 5; ii++) {
      branchesToDisplay.push(orderedBranches[ii]);
    }
    const branchCards = branchesToDisplay.map((branch) => {
      return (
        <div className="col s2" key={branch["k"]} >
          <BranchCard projectKey={this.props.projectKey} branchKey={branch["k"]} apiClients={this.props.apiClients} lastExecutionTime={branch["lastExecutionTime"]}/>
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
