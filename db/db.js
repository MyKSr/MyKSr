const mysql = require('mysql');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

db.connect((err) => {
  if(err){
    console.log('Connected to db failed!');
    console.error(err);
    return;
  }
  console.log('Connection to db established!');
});

db.end((err) => {

});
