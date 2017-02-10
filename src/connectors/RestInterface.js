class RESTInterface {
    constructor() {
        this.client = new XMLHttpRequest();
    }

    open(requestMethod, api, async) {
        this.client.open(requestMethod, "http://localhost:8091/" + api, async);
    }

    sendRequest() {
        this.client.setRequestHeader("Content-type", "application/jsonp");
        this.client.send();
    }

    getResponse() {
        return this.client.responseText;
    }
}
export default RESTInterface;
