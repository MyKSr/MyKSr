/* Use the myksr database */
use myksr;

-- Insert information to rater table
insert into rater (raterId, firstname, lastname, gender, username, email, password) values (null, 'Victor', 'M', 'vchoisk', 'v@gmail.com', 'sab');
insert into rater (raterId, firstname, lastname, gender, username, email, password) values (null, 'Chris', 'M', 'potato', 'c@gmail.com', 'sab');
insert into rater (raterId, firstname, lastname, gender, username, email, password) values (null, 'Joanne', 'F', 'jiejie', 'j@gmail.com', 'sab');
insert into rater (raterId, firstname, lastname, gender, username, email, password) values (null, 'Nikki', 'F', 'nikkiG', 'n@gmail.com', 'sab');



-- Insert information to rated table
insert into rated (ratedId, name, gender) values (null, 'Victor', 'M');
insert into rated (ratedId, name, gender) values (null, 'Chris', 'M');
insert into rated (ratedId, name, gender) values (null, 'Joanne', 'F');
insert into rated (ratedId, name, gender) values (null, 'Nikki', 'F');
/*  Execute this file from the command line by typing:
 *    mysql -u root < db/dummy.sql
 *  to create the database and the tables.*/
