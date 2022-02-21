'use strict';
const http = require('http');

const results = [];
let completed = 0;
function getHttp(url, index) {
  http.get(url, (response) => {
    response.setEncoding('utf-8');
    let result = '';
    response.on('data', (data) => {
      result += data;
    });

    response.on('error', (error) => {
      console.error('OOPS ===>', error);
    });

    response.on('end', () => {
      // console.log('finished', url);
      // results[index] = url;
      results[index] = result;

      if (++completed === 3) {
        //results.forEach((result, i) => console.log(`${i}: ${result}`));
        results.forEach(r => console.log(r));
      }
    });
  }).on('error', (error) => {
    console.error('OOPS2 ===> ', error);
  });
}
for (let i = 2; i < process.argv.length; i++) {
  getHttp(process.argv[i], i);
}