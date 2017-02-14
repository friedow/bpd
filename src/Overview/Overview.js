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
    const projectLanes = this.props.monitoredRepositories.map((repository) =>
      <ProjectLane key={repository} repository={repository} apiClients={this.props.apiClients} />
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
