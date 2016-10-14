var db = require('../db/db.js');


// $HTTP({
//   method:
//   url:fjklsadhf.com,
//   data:{rater:'Joanne',
//   rated:'Victor'}
// })

module.exports.clickPhotoRequestHandler = function(req, res){
  // var Brater = req.body.rater;
  // var Brated = req.body.rated;
  // console.log('direct',rater, rated);
  // console.log('using body',Brater, Brated);
  // console.log('using req',req.rater, req.rated);
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
