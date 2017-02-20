import React, { Component } from 'react';
import ProjectLane from './ProjectLane/ProjectLane.js';

class Overview extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper orange lighten-1">
            <a href="#" className="brand-logo center">BPD</a>
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
