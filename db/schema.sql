/* Create a database after connecting to the database server */
CREATE DATABASE myksr;

use myksr;

/* Users table has id, name, gender and
all other information that has been filled in by themselves (on login)*/
CREATE TABLE rater (
  raterId int NOT NULL AUTO_INCREMENT,
  name varchar(20),
  gender varchar(1),
  PRIMARY KEY(raterId)
);

CREATE TABLE rated (
  ratedId int NOT NULL AUTO_INCREMENT,
  name varchar(20),
  gender varchar(1),
  PRIMARY KEY(ratedId)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE ratings (
  id int NOT NULL AUTO_INCREMENT,
  rating int NOT NULL,
  raterId int NOT NULL,
  ratedId int NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (raterId)
    REFERENCES rater(raterId)
      ON DELETE CASCADE,
  FOREIGN KEY (ratedId)
    REFERENCES rated(ratedId)
      ON DELETE CASCADE
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < db/schema.sql
 *  to create the database and the tables.*/
