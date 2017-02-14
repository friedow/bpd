import React, { Component } from 'react';
import './Overview.css';
import ProjectLane from './ProjectLane/ProjectLane.js';

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {projectLanes: null};
  }
  componentDidMount() {
    this.loadProjectLanes();
  }
  loadProjectLanes() {
    const projectLanes = this.props.monitoredProjects.map((project) =>
      <ProjectLane projectKey={project} apiClients={this.props.apiClients} key={project} />
    );
    this.setState({projectLanes: projectLanes});
  }
  render() {
    return (
      <div>
        <nav>List of projects</nav>
        {this.state.projectLanes}
      </div>
    );
  }
}

export default Overview;
