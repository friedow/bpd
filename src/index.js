import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './Overview';
import './index.css';
import SonarqubeConnector from './connectors/SonarqubeConnector.js';
import RestInterface from './connectors/RestInterface.js';

const sonarqubeClient = new SonarqubeConnector("https://bpt-lab.org/sonarqube");

ReactDOM.render(
  <Overview projects={sonarqubeClient.getProjectList()} />,
  document.getElementById('root')
);
