class Branch {
  constructor(projectArray, apiClients) {
    this.name = projectArray["nm"];
    this.key = projectArray["k"];
    this.id = projectArray["id"];
    this.apiClients = apiClients;
    this.componentId = this.apiClients["sonarqube"].getComponentIdForProject(this.key);
    this.lastExecutionTime = this.apiClients["sonarqube"].getLastExecutionForComponentId(this.componentId);
  }

  getLastExecutionTime() {
    return this.lastExecutionTime;
  }
  getComponentId() {
    return this.componentId;
  }
  getBranchId() {
    return this.id;
  }
  getBranchKey() {
    return this.key;
  }
  getName() {
    return this.name;
  }



}

export default Branch;
