var cors_proxy = require('cors-anywhere');
cors_proxy.createServer().listen('8091', 'localhost', function() {
    console.log('Running CORS Anywhere on localhost:8091');
});
