const config = require('../config.js');

const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'pgkenneth',
  host: 'localhost',
  database: 'qa',
  password: config.password,
  port: 5432,
})
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})
pool.connect()
  .then(() => console.log('qa database connected'))
  .catch((err) => console.error('connection error', err.stack));

//module.exports.pool = pool;

const getAllQuestions = (productID, callback) => {
  pool.query(
  `SELECT * FROM questions WHERE product_id = ${productID}`,
  (err, results) => {
    if (err) {
      console.error(err);
    } else {
      callback(null, results.rows);
    }
  }
  );
}

const getAllAnswers = (questionID, callback) => {
  pool.query(
  `SELECT * FROM answers WHERE question_id = ${questionID}`,
  (err, results) => {
    if (err) {
      console.error(err);
    } else {
      callback(null, results.rows);
    }
  }
  );
}

// const newQuestion = (questionBody, askerName, askerEmail, callback) = > {
//   pool.query(
//     `INSERT INTO questions (id, product_id, body, date_written, asker_name, asker_email, reported, helpful) VALUES ("${}")`

//   )
// }



//const addQuestion = (productID, dateWritten, askerName, askerEmail, reported, helpful)

module.exports = {getAllQuestions, getAllAnswers};