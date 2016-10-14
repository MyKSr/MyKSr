const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/db.js');

const app = express();
//set up the port, 3000 by default
const port = process.env.PORT || 3000;

//allow parsing json and url
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

//load static files
app.use(express.static(`${__dirname}/../public`));
app.use(express.static(`${__dirname}/../node_modules`));

//get and post requests goes here
app.get('/', (req, res) => {
  res.status(200).send('Success!');
});

app.post('/postrating', (req, res) => {
  console.log('POST REQ BODY ',req.body.rate);
  db.query(`INSERT INTO ratings (id, rating, userIdRated, userIdRater) VALUES (null, ${req.body.rate}, 1, 1)`, (err, rows) => {
    if(err){
      console.log('DID NOT POST TO DB', err);
    }
    res.send('success!');
    console.log('POSTED TO DB');
    console.log(rows);
  });
});

//start server
app.listen(port, () => {
  console.log('Listening on...', port);
});
