const pool = require('./database.js');
const express = require('express');
const app = express();
const PORT = 3000;
const {getAllQuestions, getAllAnswers} = require('./database.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));


  app.get('/qa/questions/', (req, res) => {
    //  console.log('request object: ', req.query)
  getAllQuestions(req.query.product_id, (err, results) => {
    if (err) {
      res.status(400).send('Error Retrieving Product Info')
    } else {
      // console.log('results: ', res);
      res.status(200).send(results);
    }
  })
});

app.get('/qa/questions/:question_id/answers', (req, res) => {
  //console.log('requestQuery: ', req.params)
  getAllAnswers(req.params.question_id, (err, results) => {
    if (err) {
      console.error(err);
    } else {
      res.status(200).send(results);
    }
  })
});





app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});