import RestInterface from './RestInterface.js';
import BasicConnector from './BasicConnector.js';

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

class SonarqubeConnector extends BasicConnector{

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
  static getApiRouteForComponentDetails() {
    return "api/components/show?key={0}";
  }
  static getApiRouteForLastExecutedTast() {
    return "api/ce/component?componentId={0}";
  }

  constructor(remoteAddress, requestMethod = "GET") {
      super(remoteAddress, requestMethod);
  }
  
  getProjectList() {
    const APIRoute = SonarqubeConnector.getApiRouteForListOfProjects();
    return this.sendRequest(APIRoute);
  }
  getBranchesForProject(projectKey) {
    const allProjects = this.getProjectList();
    var desiredBranches = allProjects.filter(function(branch) {return branch["k"].startsWith(projectKey);});
    return desiredBranches;
  }
  getComponentIdForProject(projectKey) {
    const APIRoute = SonarqubeConnector.getApiRouteForComponentDetails().format(projectKey);
    return this.sendRequest(APIRoute)["component"]["id"];
  }
  getLastExecutionForProject(projectKey) {
    const projectComponentId = this.getIdForProject(projectKey);
    return this.getLastExecutionForComponentId(projectComponentId);
  }
  getLastExecutionForComponentId(componentId) {
    const APIRoute = SonarqubeConnector.getApiRouteForLastExecutedTast().format(componentId);
    return this.sendRequest(APIRoute)["current"]["executedAt"];
  }
  getQualityGateStatusForProject(projectKey) {
    const APIRoute = SonarqubeConnector.getApiRouteForQualityGateStatusByProjectKey().format(projectKey);
    return this.sendRequest(APIRoute)["projectStatus"]["status"];
  }
}

export default SonarqubeConnector;
