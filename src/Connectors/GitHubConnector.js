import BasicConnector from './BasicConnector.js';
import Settings from '../bpd_properties.js';

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

class GitHubConnector extends BasicConnector {

  static getApiRouteForListOfRepositories() {
    return "{0}/repos";
  }
  static getApiRouteForListOfBranchesInRepository() {
    return "repos/{0}/branches";
  }
  static getApiRouteForBranchDetails() {
    return "repos/{0}/branches/{1}";
  }

  constructor(remoteAddress, name, isUser, requestMethod = "GET") {
      super(remoteAddress, requestMethod);
      this.setHeader("Authorization", Settings["gitHubAuthToken"]);
  }

  getListOfRepositories(username, isUser) {
    var APIRoute = "";
    if(isUser) {
      APIRoute = GitHubConnector.getApiRouteForListOfRepositories().format("users/" + username);
    }
    else {
      APIRoute = GitHubConnector.getApiRouteForListOfRepositories().format("orgs/" + username);
    }
    return this.sendRequest(APIRoute);
  }
  getBranchesForRepository(repositoryUrl) {
    const APIRoute = GitHubConnector.getApiRouteForListOfBranchesInRepository().format(repositoryUrl);
    return this.sendRequest(APIRoute);
  }
  getDetailsAboutBranch(repositoryUrl, branchName) {
    const APIRoute = GitHubConnector.getApiRouteForBranchDetails().format(repositoryUrl, branchName);
    return this.sendRequest(APIRoute);
  }
}

export default GitHubConnector;
