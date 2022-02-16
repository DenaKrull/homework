const http = require('http');
const url = process.argv[2];

http.get(url, res => {
  res.setEncoding('utf8');
  let data = [];
  res.on('data', (chunk) => {
    console.log(data);
    data.push(chunk);
  });

  res.on('end', function()  {
    console.log('end');
    console.log(data.length);
  })
});
