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
      return <BranchCard key={branch["k"]} projectKey={this.props.projectKey} branchKey={branch["k"]} />;
    });
    return (
      <div className="projectLane">
        {this.props.projectKey}
        <div className="row">
          <div className="col s12 m6">
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
