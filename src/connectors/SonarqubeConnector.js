import RestInterface from './RestInterface.js';

/*eslint-disable */
if (!String.prototype.format) {
    String.prototype.format = function() {
        const args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] !== 'undefined'
                ? args[number]
                : match
                ;
        });
    };
}
/*eslint-enable */

class SonarqubeConnector {

  static getApiRouteForListOfProjects() {
    return "api/projects/index";
  }
  static getApiRouteForQualityGateStatusByProjectKey() {
    return "api/qualitygates/project_status?projectKey={0}";
  }
  static getApiRouteForQualityGateStatusByProjectId() {
    return "api/qualitygates/project_status?projectId={0}";
  }
  static getApiRouteForMetricStatus() {
    return "api/measures/component?componentKey={0}&metricKeys={1}";
  }

  static getServerRequestURI() {
      return "{0}/{1}";
  }

  constructor(remoteAddress, requestMethod = "GET") {
      this.remoteAddress = remoteAddress;
      this.requestMethod = requestMethod;
      this.client = new RestInterface();
  }
  getRemoteAddress() {
      return self.remoteAddress;
  }
  getRemotePort() {
      return self.remotePort;
  }

  setClient(client) {
      this.client = client;
  }

  parseJSON() {
    try {
        return JSON.parse(this.client.getResponse());
    } catch (error) {
        document.getElementById('root').innerHTML = "ERROR!";
        return [];
    }
  }

  getProjectList() {
    const APIRoute = SonarqubeConnector.getApiRouteForListOfProjects();
    const URI = SonarqubeConnector.getServerRequestURI().format(this.remoteAddress, APIRoute);
    this.client.open(this.requestMethod, URI, false);
    this.client.sendRequest();
    return this.parseJSON();
  }
}

export default SonarqubeConnector;
