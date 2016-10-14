const mysql = require('mysql');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "users"
});

db.connect((err) => {
  if(err){
    console.log('Connection to db failed!');
    console.error(err);
    return;
  }
  console.log('Connection to db established!');
});

db.query('SELECT * from users', (err, rows) => {
  //what to do with data here
  console.log(rows);
});

db.end();
