/* Create a database after connecting to the database server */
CREATE DATABASE myksr;

use myksr;

/* Users table has id, name, gender and 
all other information that has been filled in by themselves (on login)*/
CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(20),
  gender varchar(1),
  PRIMARY KEY(id)
);


/* Create other tables and define schemas for them here! */
CREATE TABLE ratings (
  id int NOT NULL AUTO_INCREMENT,
  rating int NOT NULL,
  userIdRated int NOT NULL,
  userIdRater int NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (userIdRater)
    REFERENCES users(id)
      ON DELETE CASCADE,
  FOREIGN KEY (userIdRated)
    REFERENCES users(id)
      ON DELETE CASCADE
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
