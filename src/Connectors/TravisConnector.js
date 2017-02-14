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

class TravisConnector extends BasicConnector {

  static getApiRouteForLatestBuildOfBranch() {
    return "repos/{0}/branches/{1}";
  }

  constructor(remoteAddress, requestMethod = "GET") {
      super(remoteAddress, requestMethod);
      this.setHeader("Accept", "application/vnd.travis-ci.2+json");
  }

  getDetailsAboutLatestBuildOfBranch(repositoryUrl, branchName) {
    const APIRoute = TravisConnector.getApiRouteForLatestBuildOfBranch().format(repositoryUrl, branchName);
    return this.sendRequest(APIRoute);
  }

}

export default TravisConnector;
