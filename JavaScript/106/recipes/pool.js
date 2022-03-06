const mysql = require('mysql');
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'recipes',
  password: 'test123',
  database: 'recipes'
});

pool.on('acquire', (connection) => {
  console.log('Connection %d acquired', connection.threadId);
});
pool.on('connection', (connection) => {
  console.log('Connection %d connected', connection.threadId);
});
pool.on('enqueue', () => {
  console.log('waiting for available connection slot');
});
pool.on('release', (connection) => {
  console.log('Connection %d connected', connection.threadId);
});

module.exports = pool;
