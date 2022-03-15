const pool = require('./database.js');
const express = require('express');
const app = express();
const PORT = 3000;
const {getAllQuestions, getAllAnswers} = require('./database.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));


  app.get('/qa/questions/', (req, res) => {
  console.log('request id: ', req.query.product_id)
  getAllQuestions(req.query.product_id)
  .then((queryResults)=> {
    console.log(queryResults);
    res.status(200).send(queryResults);
  })
  .catch((err)=> {
    console.log(err);
  })
});





app.get('/qa/questions/answers', (req, res) => {
  console.log('💄💄💄💄💄💄💄', req.query.question_id)
  getAllAnswers(req.query.question_id)
  .then((ansQueryResults) => {
    console.log(ansQueryResults);
    res.status(200).send(ansQueryResults);
  })
  .catch((err) => {
    console.log(err);
  })
});


// app.get('/qa/questions/:question_id/answers', (req, res) => {
//   //console.log('requestQuery: ', req.params)
//   getAllAnswers(req.params.question_id, (err, results) => {
//     if (err) {
//       console.error(err);
//     } else {
//       res.status(200).send(results);
//     }
//   })
// });




app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});