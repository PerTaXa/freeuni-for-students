const http = require('http');
const url = require('url');

function handler(req, res) {
    const parsedUrl = url.parse(req.url, true);
    if(parsedUrl.pathname === '/'){
        res.writeHead(200, {'Content-type':'text/plain'});
        res.write('Hello, I am a webserver !');
        res.end();
    } else if (parsedUrl.pathname === '/login'){
        
    } else {
        
    }
}

const server = http.createServer(handler);
server.listen(5000);