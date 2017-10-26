import React, { Component } from 'react';
import Overview from './Overview/Overview.js';
import GitHubConnector from './Connectors/GitHubConnector.js';
import SonarqubeConnector from './Connectors/SonarqubeConnector.js';
import TravisConnector from './Connectors/TravisConnector.js';
import CoverallsConnector from './Connectors/CoverallsConnector.js';
import Settings from './bpd_properties.js';

const sonarqubeClient = new SonarqubeConnector(Settings["sonarqubeApi"]);
const travisClient = new TravisConnector(Settings["travisApi"]);
const gitHubClient = new GitHubConnector(Settings["gitHubApi"]);
const coverallsClient = new CoverallsConnector(Settings["coverallsApi"]);
const clients = {sonarqube:sonarqubeClient, gitHub:gitHubClient, travis:travisClient, coveralls:coverallsClient};
const monitoredRepositories = ['MaximilianV/java-junit-sample'];

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
