var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    removeHeaders: ['cookie', 'cookie2']
}).listen('8091', 'localhost', function() {
    console.log('Running CORS Anywhere on localhost:8091');
});
