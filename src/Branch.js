class Branch {

  constructor(branchName, repositoryUrl, apiClients) {
    this.name = branchName;
    this.owner = repositoryUrl.split("/")[0];
    this.repository = repositoryUrl.split("/")[1];
    this.apiClients = apiClients;
    this.branchPattern = /BP[\-|\_](\d{0,4})[\-|\_](.+)/;
    // this.componentId = this.apiClients["sonarqube"].getComponentIdForProject(this.key);
    // this.lastExecutionTime = this.apiClients["sonarqube"].getLastExecutionForComponentId(this.componentId);
    this.latestCommitTimer = "";
    this.latestCommitter = "unknown";
    this.buildStatus = "unkown";
    this.update();
  }

  /**
  * Fetches information from GitHub-API and parses returned JSON
  * to reset attribute-values.
  *
  */
  update() {
    const latestInformation = this.apiClients["gitHub"].getDetailsAboutBranch(this.getRepositoryUrl(), this.getName());
    this.latestCommitTimer = new Date(latestInformation["commit"]["commit"]["author"]["date"]);
    this.latestCommitter = latestInformation["commit"]["commit"]["author"]["name"];
    const latestBuildInformation = this.apiClients["travis"].getDetailsAboutLatestBuildOfBranch(this.getRepositoryUrl(), this.getName());
    this.buildStatus = latestBuildInformation["branch"]["state"];
  }

  getName() {
    return this.name;
  }
  getOwner() {
    return this.owner;
  }
  getRepository() {
    return this.repository;
  }
  getRepositoryUrl() {
    return this.getOwner() + "/" + this.getRepository();
  }
  getLastCommitTime() {
    return this.latestCommitTimer;
  }
  getLastCommitTimeAsString() {
    return this.getLastCommitTime().toLocaleString();
  }
  getBuildStatus() {
    return this.buildStatus;
  }
  isDeveloperBranch() {
    return (this.getName() == "dev" || this.getName() == "developer");
  }
  isMasterBranch() {
    return (this.getName() == "master");
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
    // if(this.getQualityGateStatus() == "ERROR") {
    //   return false;
    // }
    // return true;
    return true;
  }

  //TRAVIS FUNCTIONS
  didLatestBuildPass() {
    return (this.getBuildStatus() == "passed");
  }


}

export default Branch;
