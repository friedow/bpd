import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './Overview';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import './index.css';
import SonarqubeConnector from './connectors/SonarqubeConnector.js';
import RestInterface from './connectors/RestInterface.js';

const sonarqubeClient = new SonarqubeConnector("https://bpt-lab.org/sonarqube");

ReactDOM.render(
  <Overview projects={sonarqubeClient.getProjectList()} />,
  document.getElementById('root')
);
