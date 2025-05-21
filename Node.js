var httpProxy = require('http-proxy')

var proxy = httpProxy.createProxy();

var options = {
    'foo.com': 'https://appetize.io/',
    'bar.com': 'https://appetize.io/'
}

require('http').createServer(function(req, res) {
    proxy.web(req, res, {
        target: options[req.headers.host]
    });
}).listen(8000);
