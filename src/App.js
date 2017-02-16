import React, { Component } from 'react';
import Overview from './Overview/Overview.js';
import GitHubConnector from './Connectors/GitHubConnector.js';
import SonarqubeConnector from './Connectors/SonarqubeConnector.js';
import TravisConnector from './Connectors/TravisConnector.js';
import CoverallsConnector from './Connectors/CoverallsConnector.js';
import './App.css';

const sonarqubeClient = new SonarqubeConnector('http://localhost:8091/https://bpt-lab.org/sonarqube');
const travisClient = new TravisConnector('https://api.travis-ci.org');
const gitHubClient = new GitHubConnector('https://api.github.com');
const coverallsClient = new CoverallsConnector('http://localhost:8091/https://coveralls.io');
const clients = {sonarqube:sonarqubeClient, gitHub:gitHubClient, travis:travisClient, coveralls:coverallsClient};
const monitoredRepositories = ['bptlab/argos-frontend', 'bptlab/argos-backend'];

class App extends Component {
  render() {
    return (
      <div className="app">
          <Overview monitoredRepositories={monitoredRepositories} apiClients={clients} />
      </div>
    );
  }
}

export default App;
