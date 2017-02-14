import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './Overview/Overview.js';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import './index.css';
import GitHubConnector from './Connectors/GitHubConnector.js';
import SonarqubeConnector from './Connectors/SonarqubeConnector.js';
import TravisConnector from './Connectors/TravisConnector.js';
import RestInterface from './Connectors/RestInterface.js';

const sonarqubeClient = new SonarqubeConnector("http://localhost:8091/https://bpt-lab.org/sonarqube");
const travisClient = new TravisConnector("https://api.travis-ci.org");
const gitHubClient = new GitHubConnector("https://api.github.com");
const clients = {sonarqube:sonarqubeClient, gitHub:gitHubClient, travis:travisClient};
const monitoredRepositories = ['bptlab/argos-frontend', 'bptlab/argos-backend'];

// <Overview projects={sonarqubeClient.getProjectList()} />,
ReactDOM.render(
  <Overview monitoredRepositories={monitoredRepositories} apiClients={clients} />,
  document.getElementById('root')
);
