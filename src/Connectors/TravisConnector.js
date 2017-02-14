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

  constructor(remoteAddress, requestMethod = "GET") {
      super(remoteAddress, requestMethod);
  }

}

export default TravisConnector;
