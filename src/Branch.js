class Branch {

  constructor(projectArray, masterProject, apiClients) {
    this.key = projectArray["k"];
    this.id = projectArray["id"];
    this.apiClients = apiClients;
    this.masterKey = masterProject;
    this.branchPattern = /BP[\-|\_](\d{0,4})[\-|\_](.+)/;
    this.componentId = this.apiClients["sonarqube"].getComponentIdForProject(this.key);
    this.lastExecutionTime = this.apiClients["sonarqube"].getLastExecutionForComponentId(this.componentId);
  }

  getLastExecutionTime() {
    return this.lastExecutionTime;
  }
  getComponentId() {
    return this.componentId;
  }
  getId() {
    return this.id;
  }
  getKey() {
    return this.key;
  }
  getName() {
    if(this.key == this.masterKey) {
      return "master";
    }
    if(this.key > this.masterKey) {
      return this.key.replace(this.masterKey + ":", "");
    }
    return this.key;
  }
  isIssueExtractable() {
    const ret = this.branchPattern.exec(this.getName());
    if(ret) {
      return true;
    }
    return false;
  }
  getIssueNumber() {
    const ret = this.branchPattern.exec(this.getName());
    if(ret){
      return ret[1];
    }
    return "";
  }
  getIssueName() {
    const ret = this.branchPattern.exec(this.getName());
    if(ret){
      var unformattedName = ret[2];
      unformattedName = unformattedName.replace(/\_/g, " ");
      unformattedName = unformattedName.replace(/\-/g, " ");
      return unformattedName;
    }
    return "";
  }
  getJiraLink() {
    return "https://bpt-lab.org/jira/secure/RapidBoard.jspa?rapidView=8&view=detail&selectedIssue=BP-" + this.getIssueNumber();
  }

  //SONARQUBE FUNCTIONS
  getQualityGateStatus() {
    return this.apiClients["sonarqube"].getQualityGateStatusForProject(this.getKey());
  }
  doesPassQualityGate() {
    if(this.getQualityGateStatus() == "ERROR") {
      return false;
    }
    return true;
  }



}

export default Branch;
