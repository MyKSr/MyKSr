const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/db.js');
const request = require('request');
const clientToDB = require('./fromClientToDb');
const multer  = require('multer');
const upload = multer({ dest: 'public/uploads/' });

const app = express();
//set up the port, 3000 by default
const port = process.env.PORT || 3000;

//allow parsing json and url
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

//load static files
app.use(express.static(`${__dirname}/../public`));
app.use(express.static(`${__dirname}/../node_modules`));

// Get and post requests goes here
// User signs up
app.post('/signup', upload.any(), function(req, res, next) {
  console.log("signed uppp");
  console.log(req.body);
  console.log(req.files);
  console.log(req.file);
}, clientToDB.postSignupToDB);
// User is logs in to see friend's photos
app.get('/allFriends', clientToDB.fetchAllFriends);
// User submits their completed post of rating friend
app.post('/postrating', clientToDB.postRatingToDB);
// User signed up already
app.get('/currentUserInfo/:username', clientToDB.currentUserInfoInDB);
// User clicks friend's photo, who they have already rated
app.get('/getAllRatings/:clickedUser', clientToDB.getAllRatingsOfUser);
// Get rated gender
app.get('/getRatedGender/:clickedUser', clientToDB.getRatedGender);
// User clicks friend's photo to rate, or see their current rating
app.get('/:raterUsername/:rated', clientToDB.clickPhotoRequestHandler);

//start server
app.listen(port, () => {
  console.log('Listening on...', port);
});
