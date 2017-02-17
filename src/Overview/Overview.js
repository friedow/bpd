import React, { Component } from 'react';
import ProjectLane from './ProjectLane/ProjectLane.js';
import './Overview.css';

class Overview extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo center">bpd</a>
          </div>
        </nav>
        {this.props.monitoredRepositories.map((repository) =>
          <ProjectLane key={repository}
                       repository={repository}
                       apiClients={this.props.apiClients} />
        )}
      </div>
    );
  }
}

export default Overview;
