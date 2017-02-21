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

class CoverallsConnector extends BasicConnector {

  static getApiRouteForBuildStatusBySha() {
    return "builds/{0}.json";
  }


  constructor(remoteAddress, name, isUser, requestMethod = "GET") {
      super(remoteAddress, requestMethod);
  }

  getCoverageInformationBySha(shaHash) {
    const APIRoute = CoverallsConnector.getApiRouteForBuildStatusBySha().format(shaHash);
    return this.sendRequest(APIRoute);
  }
}

export default CoverallsConnector;
