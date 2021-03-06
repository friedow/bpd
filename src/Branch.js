class Branch {

  constructor(branchName, repositoryUrl, apiClients) {
    this.name = branchName;
    this.owner = repositoryUrl.split("/")[0];
    this.repository = repositoryUrl.split("/")[1];
    this.apiClients = apiClients;
    this.branchPattern = /BP[\-|\_](\d{0,4})[\-|\_](.+)/;
    // this.sonarqubeComponentId = this.apiClients["sonarqube"].getComponentIdForProject(this.getSonarqubeKey());
    this.latestCommitTimer = "";
    this.latestCommitter = "unknown";
    this.latestCommitterAvatarUrl = "";
    this.latestSha = null;
    this.buildStatus = null;
    this.qualityGateStatus = null;
    this.coverage = null;
    this.coverageChange = null;
    this.update();
  }

  /**
  * Fetches information from GitHub-API and parses returned JSON
  * to reset attribute-values.
  *
  */
  update() {
    try {
      const latestInformation = this.apiClients["gitHub"].getDetailsAboutBranch(this.getRepositoryUrl(), this.getName());
      this.latestCommitTimer = new Date(latestInformation["commit"]["commit"]["author"]["date"]);
      this.latestCommitter = latestInformation["commit"]["commit"]["author"]["name"];
      this.latestCommitterAvatarUrl = latestInformation["commit"]["author"]["avatar_url"];
      this.latestSha = latestInformation["commit"]["sha"];
    } catch (e) {
      return 1;
    }
    this.updateTravisInformation();
    this.updateSonarqubeInformation();
    this.updateCoverallsInformation();
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
  getLatestCommitter() {
    return this.latestCommitter;
  }
  getLatestCommitterAvatarUrl() {
    return this.latestCommitterAvatarUrl;
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
    return ("https://bpt-lab.org/jira/secure/RapidBoard.jspa?rapidView=8&view=detail&selectedIssue=BP-" + this.getIssueNumber());
  }

  //SONARQUBE FUNCTIONS

  updateSonarqubeInformation() {
    try {
      this.qualityGateStatus = this.apiClients["sonarqube"].getQualityGateStatusForProject(this.getSonarqubeKey());
    } catch (e) {
        this.qualityGateStatus = null;
    }
  }

  getSonarqubeKey() {
    var sonarqubeKey = "de.hpi.bpt:" + this.getRepository();
    if(!this.isMasterBranch())
      sonarqubeKey += ":" + this.getName();
    return sonarqubeKey;
  }
  getQualityGateStatus() {
    return this.qualityGateStatus;
  }
  doesPassQualityGate() {
    return (!(this.getQualityGateStatus() == "ERROR"));
  }
  getNiceSonarqubeString() {
    if(!this.didSonarqubeRun())
      return "no results";
    if(this.doesPassQualityGate()) {
      return "QG passed";
    }
    else {
      return "QG failed";
    }
  }
  didSonarqubeRun() {
    return (this.qualityGateStatus);
  }

  //TRAVIS FUNCTIONS
  updateTravisInformation() {
    try {
      const latestBuildInformation = this.apiClients["travis"].getDetailsAboutLatestBuildOfBranch(this.getRepositoryUrl(), this.getName());
      this.buildStatus = latestBuildInformation["branch"]["state"];
    } catch (e) {
        this.buildStatus = null;
    }
  }

  getBuildStatus() {
    return this.buildStatus;
  }
  didLatestBuildPass() {
    return (this.getBuildStatus() == "passed");
  }
  didTravisRun() {
    return (this.buildStatus);
  }

  //COVERALLS FUNCTIONS
  updateCoverallsInformation() {
    if(!this.latestSha) {
      return;
    }
    try {
      const latestCoverallsInformation = this.apiClients["coveralls"].getCoverageInformationBySha(this.latestSha);
      this.coverage = parseFloat(latestCoverallsInformation["covered_percent"]);
      this.coverageChange = parseFloat(latestCoverallsInformation["coverage_change"]);
    } catch (e) {
      this.coverage = null;
      this.coverageChange = null;
    }
  }
  hasCoverage() {
    if (this.coverage) {
      return true;
    }
    return false;
  }
  getCoverage() {
    if(this.hasCoverage()) {
      return (Math.round(this.coverage * 10) / 10).toString();
    }
    return "";
  }
  getCoverageChange() {
    if(this.hasCoverage()) {
      return (Math.round(this.coverageChange * 10) / 10).toString();
    }
    return "";
  }
  getNiceCoverage() {
    var niceString = this.getCoverage();
    if(niceString) {
      return niceString + " %";
    }
    return "";
  }
  getNiceCoverageChange() {
    var niceString = this.getCoverageChange();
    if(niceString) {
      if(!niceString.includes("-"))
        niceString = "+" + niceString;
      return niceString + " %";
    }
    return "";
  }

}

export default Branch;
