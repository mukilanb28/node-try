const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  console.log(`\n RQUEST TRIGGERED --- ${req.connection.remoteAddress} -- ${req.socket.remoteAddress} -- ${req.headers['x-forwarded-for']}`)
  try{
    for(let i in req.headers){
        console.log(`${i} : ${req.headers[i]}`);
    }
  }catch{

  }
  console.log("\n ->", req.headers.socket.handshake.headers['x-forwarded-for'].split(',')[0])

  res.end('Hello, World! ' + req.connection.remoteAddress + " && " + req.socket.remoteAddress + " && " + req.headers['x-forwarded-for']);
}

const server = http.createServer(requestListener);
server.listen(8080);
