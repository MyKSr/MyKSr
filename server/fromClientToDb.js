var db = require('../db/db.js');

// Client side must send the url with the correct parameters as /:rater/:rated format
module.exports.clickPhotoRequestHandler = function(req, res){
  var rater = req.params.rater;
  var rated = req.params.rated;
  var queryString = `SELECT rating, raterId, ratedId
                     FROM ratings
                     INNER JOIN rater on ratings.raterId = rater.id
                     INNER JOIN rated on ratings.ratedId = rated.id
                     WHERE rater.name='${rater}' AND 
                     rated.name='${rated}';
                    `;
  db.query(queryString, function(err, rows) {
    if (err) {
      console.error(err);
    }
    // res.send(rows);
    console.log(rows);
    res.send('success');
  })
}
module.exports.postRatingToDB = (req, res) => {
  console.log('POST REQ BODY ',req.body.rate);
  var queryString = `INSERT INTO ratings
                     (id, rating, userIdRated, userIdRater) VALUES
                     (null, ${req.body.rate}, ${req.body.rated}, ${req.body.rater});
                     `;
  db.query(queryString, (err, rows) => {
    if (err) {
      console.log('DID NOT POST TO DB', err);
    }
    console.log('POSTED TO DB');
    console.log(rows);
    res.send(200, 'Successfully posted the user data');
  });
}

module.exports.postSignupToDB = (req, res) => {
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  console.log('post req body', firstname, lastname, username, email, password);
  var queryString = `INSERT INTO users (id, firstname, lastname, username, email, password) VALUES
                   (null, '${firstname}', '${lastname}', '${username}', '${email}', '${password}');`;
  db.query(queryString, function(err, rows) {
    if (err) {
      console.log('Failed to post DB');
      throw err;
    }
    res.send(200, 'Successfully posted the user data');
  });
}
