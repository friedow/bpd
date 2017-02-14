class RESTInterface {
    constructor() {
        this.client = new XMLHttpRequest();
    }

    open(requestMethod, api, async) {
      console.log(api);
        this.client.open(requestMethod, api, async);
    }

    sendRequest() {
        this.client.setRequestHeader("Content-type", "application/jsonp");
        this.client.send();
    }
    setAcceptHeader(acceptedResponse) {
      this.client.setRequestHeader("Accept", acceptedResponse);
    }

    getResponse() {
        return this.client.responseText;
    }
}
export default RESTInterface;
