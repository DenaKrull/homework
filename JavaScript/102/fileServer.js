const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const readStream = fs.createReadStream(process.argv[3]);
 // readStream.pipe(res);
 readStream.on('data', data => res.write(data));
 readStream.on('end', () => res.end());

}).listen(process.argv[2]);