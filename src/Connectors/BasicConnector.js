import RESTInterface from './RestInterface.js';
import RESTInterfaceMock from './RestInterfaceMock.js';

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

class BasicConnector {

  static getServerRequestURI() {
      return "{0}/{1}";
  }

  constructor(remoteAddress, requestMethod = "GET") {
      this.remoteAddress = remoteAddress;
      this.requestMethod = requestMethod;
      this.client = new RESTInterface();
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
  setHeader(header, headerValue) {
    this.client.setHeader(header, headerValue);
  }

  sendRequest(APIRoute) {
    const URI = BasicConnector.getServerRequestURI().format(this.remoteAddress, APIRoute);
    this.client.open(this.requestMethod, URI, false);
    this.client.sendRequest();
    return this.parseJSON();
  }

  parseJSON() {
    try {
        return JSON.parse(this.client.getResponse());
    } catch (error) {
        document.getElementById('root').innerHTML = "ERROR!";
        return [];
    }
  }
}

export default BasicConnector;
