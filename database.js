const config = require('../config.js');

const { Pool, Client } = require('pg');

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

// json_build_object(SELECT id, body,  FROM answers WHERE question_id = )
// const getAllQuestions = (productID, callback) => {
//   const questionQuery = `SELECT id, body, to_timestamp(date_written/1000) , asker_name, asker_email, reported, helpful  FROM questions WHERE product_id = ${productID}`

//   pool.query(questionQuery,

//   (err, results) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log('these are results:', results);
//       callback(null, results.rows);
//     }
//   }
//   );
// }

// `SELECT id, body, to_timestamp(date_written/1000) , asker_name, asker_email, reported, helpful,
//   array_agg( SELECT * FROM answers WHERE answers.question_id = questions.id)  AS answers
//   FROM questions WHERE product_id = `

const getAllQuestions = async(productID) => {
  const questionsResponse = { product_id: productID };
  const questionQuery = `SELECT id, body, to_timestamp(date_written/1000), asker_name, asker_email, reported, helpful FROM questions WHERE product_id = ${productID}`


  let results = await pool.query(questionQuery);
  //console.log(results);
  return results;
}

// SELECT a.*,
    //   (
    //     SELECT array_to_json(array_agg(row_to_json(d)))
    //     FROM (
    //       SELECT p.id, p.url, a.helpfulness
    //       FROM photos p
    //       WHERE a.id = answer_id
    //     ) d
    //   ) as photos
    // FROM answers a
    // WHERE a.id = ${questionID}
  // pool.query(questionQuery,

  // (err, results) => {
  //   if (err) {
  //     console.error(err);
  //   } else {
  //     console.log('these are results:', results);
  //     callback(null, results.rows);
  //   }
  // }
  // );


// let results = await pool.query(questionQuery)
// return results;



/*
const questionQuery = `SELECT id, body, to_timestamp(date_written/1000) , asker_name, asker_email, reported, helpful, (SELECT * FROM answers WHERE answers.question_id = questions.id) as answers  FROM questions WHERE product_id = ${productID}`

`SELECT id, body, to_timestamp(date_written/1000) , asker_name, asker_email, reported, helpful, (SELECT * FROM answers WHERE answers.question_id = questions.id) AS answers  FROM questions WHERE product_id = ${productID}`

(array_agg(SELECT * FROM answers WHERE answers.question_id = questions.id)) AS answers

(SELECT array_agg(a) FROM (SELECT * FROM answers WHERE answers.question_id = questions.id) a ) AS answers
  FROM questions WHERE product_id = ${productID}`
*/



// const getAllAnswers = async (productID) => {
//   const response = { question_id: productID };
//   response.results = await pool.query(`SELECT row_to_json(t)
//   FROM (
//     SELECT q.*,
//     (
//       SELECT array_to_json(array_agg(row_to_json(d)))
//       FROM (
//         SELECT a.id, a.body, a.helpful
//         FROM answers a
//         WHERE q.id = question_id
//       ) d
//     ) as answers
//   FROM questions q
//   WHERE q.id = ${productID}
//   ) t`);

//   console.log('response.rows: ', response.results.rows);
//   return response.results.rows;
// }

const getAllAnswers = async (questionID) => {
  const answerQuery = `SELECT * FROM answers WHERE question_id = ${questionID}`
  let answersResults = await pool.query(answerQuery);
  return answersResults;
}

// const getAllAnswers = (questionID, callback) => {
//   pool.query(
//   `SELECT * FROM answers WHERE question_id = ${questionID}`,
//   (err, results) => {
//     if (err) {
//       console.error(err);
//     } else {
//       callback(null, results.rows);
//     }
//   }
//   );
// }

// const newQuestion = (questionBody, askerName, askerEmail, callback) = > {
//   pool.query(
//     `INSERT INTO questions (id, product_id, body, date_written, asker_name, asker_email, reported, helpful) VALUES ("${}")`

//   )
// }



//const addQuestion = (productID, dateWritten, askerName, askerEmail, reported, helpful)

module.exports = {getAllQuestions, getAllAnswers};