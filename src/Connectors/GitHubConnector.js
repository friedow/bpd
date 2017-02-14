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

class GitHubConnector extends BasicConnector {

  static getApiRouteForListOfRepositories() {
    return "{0}/repos";
  }
  static getApiRouteForListOfBranchesInRepository() {
    return "repos/{0}/{1}/branches";
  }
  static getApiRouteForBranchDetails() {
    return "repos/{0}/{1}/branches/{2}";
  }

  constructor(remoteAddress, name, isUser, requestMethod = "GET") {
      super(remoteAddress, requestMethod);
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
  getBranchesForRepository(owner, repository) {
    const APIRoute = GitHubConnector.getApiRouteForListOfBranchesInRepository().format(owner, repository);
    return this.sendRequest(APIRoute);
  }
  getDetailsAboutBranch(branch) {
    const APIRoute = GitHubConnector.getApiRouteForBranchDetails().format(branch.getOwner(), branch.getRepository(), branch.getName());
    return this.sendRequest(APIRoute);
  }
}

export default GitHubConnector;
