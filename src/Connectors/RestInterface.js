class RESTInterface {
    constructor() {
        this.client = new XMLHttpRequest();
        this.header = {};
    }

    open(requestMethod, api, async) {
      console.log(api);
        this.client.open(requestMethod, api, async);
    }

    sendRequest() {
        this.client.setRequestHeader("Content-type", "application/jsonp");
        this.client.setRequestHeader("User-Agent", "bpd/0.0.1");
        for (const header in this.header) {
          this.client.setRequestHeader(header, this.header[header]);
        }
        this.client.send();
    }
    setHeader(header, headerValue) {
      this.header[header] = headerValue;
    }

    getResponse() {
        return this.client.responseText;
    }
}
export default RESTInterface;
