import React, { Component } from 'react';
import './Overview.css';
import ProjectLane from './ProjectLane/ProjectLane.js';

class Overview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const projectLanes = this.props.monitoredProjects.map((project) =>
        <ProjectLane projectKey={project} apiClients={this.props.apiClients} key={project} />
    );

    return (
      <div>
        <nav>List of projects</nav>
        {projectLanes}
      </div>
    );
  }
}

export default Overview;
