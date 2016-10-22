
const mysql = require('mysql');

const db = mysql.createConnection({
  socketPath: "/var/run/mysqld/mysqld.sock",
  user: "root",
  password: "gulpfiction",
  database: "myksr"
});

db.connect((err) => {
  if(err){
    console.log('Connection to db failed!');
    console.error(err);
    return;
  }
  console.log('Connection to db established!');
});

module.exports = db;
