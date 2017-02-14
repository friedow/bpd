import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './Overview/Overview.js';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import './index.css';
import SonarqubeConnector from './Connectors/SonarqubeConnector.js';
import GitHubConnector from './Connectors/GitHubConnector.js';
import RestInterface from './Connectors/RestInterface.js';

const sonarqubeClient = new SonarqubeConnector("http://localhost:8091/https://bpt-lab.org/sonarqube");
// const travisClient = new SonarqubeConnector("http://localhost:8091/https://bpt-lab.org/sonarqube");
const gitHubClient = new GitHubConnector("https://api.github.com");
const clients = {sonarqube:sonarqubeClient, gitHub:gitHubClient};
const monitoredProjectkeys = ['de.hpi.bpt:argos-frontend', 'de.hpi.bpt:argos-backend'];

// <Overview projects={sonarqubeClient.getProjectList()} />,
ReactDOM.render(
  <Overview monitoredProjects={monitoredProjectkeys} apiClients={clients} />,
  document.getElementById('root')
);
