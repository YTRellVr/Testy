var httpProxy = require('http-proxy')

var proxy = httpProxy.createProxy();

var options = {
    'foo.com': 'http://website.com:8001',
    'bar.com': 'http://website2.com:8002'
}

require('http').createServer(function(req, res) {
    proxy.web(req, res, {
        target: options[req.headers.host]
    });
}).listen(8000);
