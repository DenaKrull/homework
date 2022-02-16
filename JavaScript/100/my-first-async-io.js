// const fs = require('fs');

// fs.readFile(process.argv[2], 'utf-8', (error, data) => {
//   if(error) {
//       console.error(error);
//       return;
//   }

//   const lines = data.split('\n').length - 1;
//   console.log(lines);
// });

const fs = require('fs/promises');

// fs.readFile(process.argv[2], 'utf-8')
//   .then(data =>console.log(data.split('\n').length - 1))
//   .catch(error => console.error(error));

(async () => {
  try {
    const fileContents = await fs.readFile(process.argv[2], 'utf-8');
    console.log(fileContents.split('\n').length - 1);
  } catch (error) {
    console.error(error);
  }
})();



