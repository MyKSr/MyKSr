var db = require('../db/db.js');


// $HTTP({
//   method:
//   url:fjklsadhf.com,
//   data:{rater:'Joanne',
//   rated:'Victor'}
// })

// Client side must send the url with the correct parameters as /:rater/:rated format
module.exports.clickPhotoRequestHandler = function(req, res){
  // var rater = req.params.rater;
  // var rated = req.params.rated;
  // var queryString = `SELECT rating, userIdRater, userIdRated
  //                    FROM ratings where userIdRater=${rater}
  //                    AND WHERE userIdRated=${rated};
  //                   `
  // db.query(queryString, function(err, rows) {
  //   if (err) {
  //     console.error(err);
  //   }
  //   res.send(rows);
    // console.log(rows);
  // })
  res.send('success');
}
module.exports.postRatingToDB = (req, res) => {
  console.log('POST REQ BODY ',req.body.rate);
  db.query(`INSERT INTO ratings (id, rating, userIdRated, userIdRater) VALUES 
    (null, ${req.body.rate}, ${req.body.rated}, ${req.body.rater})`, (err, rows) => {
    if (err) {
      console.log('DID NOT POST TO DB', err);
    }
    console.log('POSTED TO DB');
    console.log(rows);
    res.send(200, 'Successfully posted the user data');
  });
}