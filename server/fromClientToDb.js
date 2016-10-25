var db = require('../db/db.js');

// Client side must send the url with the correct parameters as /:rater/:rated format
module.exports.clickPhotoRequestHandler = function(req, res){
  var raterUsername = req.params.raterUsername;
  var rated = req.params.rated;
  var queryString = `SELECT id
                     FROM ratings
                     INNER JOIN rater on ratings.raterId = rater.raterId
                     INNER JOIN rated on ratings.ratedId = rated.ratedId
                     WHERE rater.username='${raterUsername}' AND
                     rated.name='${rated}';
                    `;
  db.query(queryString, function(err, rows) {
    if (err) {
      console.error('We got an error from attempt to fetch rating inf ormation', err);
      throw err;
    }
    console.log('This is what we get from friend click');
    res.send(200, rows);
  })
}

module.exports.postRatingToDB = (req, res) => {
  var queryString = `INSERT INTO ratings
                     (id, activityLevel, spendingLevel, partyingLevel, nerdyLevel, talkativeLevel, raterId, ratedId, comment) VALUES
                     (null, '${req.body.ratingsObj.activityLevel}',
                     '${req.body.ratingsObj.spendingLevel}',
                     '${req.body.ratingsObj.partyingLevel}',
                     '${req.body.ratingsObj.nerdyLevel}',
                     '${req.body.ratingsObj.talkativeLevel}',
                     (SELECT raterId FROM rater WHERE username = '${req.body.raterUsername}'),
                     (SELECT ratedId FROM rated WHERE name = '${req.body.rated}'),
                     "${req.body.comment.replace(/\"/g, "'")}");
                     `;
  db.query(queryString, (err, rows) => {
    if (err) {
      console.log('DID NOT POST TO DB', err);
      throw err;
    }
    console.log('POSTED TO DB');
    console.log(rows);
    res.send(200, 'Successfully posted the user data');
  });
}

module.exports.postSignupToDB = (req, res) => {
  // var firstname = req.body.firstname;
  // var lastname = req.body.lastname;
  // var username = req.body.username;
  // var gender = req.body.gender;
  // var email = req.body.email;
  // var password = req.body.password;
  // var queryString = `INSERT INTO rater
  //                    (raterId, firstname, lastname, gender, username, email, password) VALUES
  //                    (null, '${firstname}', '${lastname}', '${gender}', '${username}', '${email}', '${password}');
  //                   `;
  // db.query(queryString, function(err, rows) {
  //   if (err) {
  //     console.log('Failed to post DB');
  //     throw err;
  //   }
    res.send(200, req.files);
  // });
}

module.exports.fetchAllFriends = (req, res) => {
  // later add where group = current user's group, this means that
  // we have to get the group information to the server
  var queryString = `SELECT *
                     FROM rated;
                    `;
  db.query(queryString, (err, rows) => {
    if (err) {
      console.log('Failed to fetch all friend list from DB');
      throw err;
    }
    console.log('Successfully fetched all users from db');
    res.send(200, rows);
  });
}

module.exports.currentUserInfoInDB = (req, res) => {
  var username = req.params.username;
  var queryString = `SELECT *
                     FROM rater
                     WHERE username = '${username}';
                    `;
  db.query(queryString, (err, rows) => {
    if (err) {
      console.log('Cannot get current user information');
      throw err;
    }
    console.log('Successfully fetched current user information');
    res.send(200, rows);
  });
}

module.exports.getAllRatingsOfUser = (req, res) => {
  var clickedUser = req.params.clickedUser;
  var queryString = `SELECT *
                     FROM ratings
                     INNER JOIN rated on ratings.ratedId = rated.ratedId
                     INNER JOIN rater on ratings.raterId = rater.raterId
                     WHERE rated.name = '${clickedUser}';
                    `
  db.query(queryString, (err, rows) => {
    if (err) {
      console.log('Cannot get clicked user ratings');
      throw err;
    }
    console.log('Successfully fetched clicked user information');
    res.send(200, rows);
  });
}
