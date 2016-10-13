const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//set up the port, 3000 by default
const port = process.env.PORT || 3000;

//allow parsing json and url
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

//load static files
app.use(express.static(`${__dirname}/../public`));

//get and post requests goes here


//start server
app.listen(port, () => {
  console.log('Listening on...', port);
});
