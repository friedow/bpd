import React, { Component } from 'react';
import './ProjectLane.css';
import BranchCard from './BranchCard/BranchCard.js';

class ProjectLane extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const branches = this.props.apiClients["sonarqube"].getBranchesForProject(this.props.projectKey);
    const branchCards = branches.map((branch) => {
      return (
        <div className="col s2">
          <BranchCard key={branch["k"]} projectKey={this.props.projectKey} branchKey={branch["k"]} />
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
        // <div className="vertical-text">
        //   This is a lane for project {this.props.projectKey}
        // </div>
}
      </div>
    );
  }
}

export default ProjectLane;
