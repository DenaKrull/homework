const http = require('http');
const map = require('through2-map');

http.createServer((req, res) => {
  if(req.method === 'POST') {
    res.statusCode = 400;
      return res.end('Send me a POST request!\n');
  }
  req.pipe((map(chunk => chunk.toString().toUpperCase()))).pipe(res);

}).listen(process.argv[2]);