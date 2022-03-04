const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'pgkenneth',
  host: 'localhost',
  database: 'qa',
  password: 'alfredo',
  port: 5432,
})
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})
pool.connect()
  .then(() => console.log('connected'))
  .catch((err) => console.error('connection error', err.stack));

module.exports.pool = pool;