const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  
  res.end('Hello, World! ' + req.connection.remoteAddress + " && " + req.socket.remoteAddress + " && " + req.headers['x-forwarded-for']);
}

const server = http.createServer(requestListener);
server.listen(8080);
