const net = require('net');
const server = net.createServer((socket) => {
  console.log('got connection');

  const date = new Date();

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const date = (date.getDate()).toString().padStart(2, '0');
  const hours = (date.getHours()).toString().padStart(2, '0');
  const minutes = (date.getMinutes()).toString().padStart(2, '0');

  socket.end(`${year}-${month}-${date} ${hours}:${minutes}\n`);
})
server.listen(process.argv[2]);