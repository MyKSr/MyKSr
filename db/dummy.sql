/* Use the myksr database */
use myksr;

-- Insert information to rater table
insert into rater (id, firstname, lastname, gender, username, email, password) values (1, 'Victor', 'M', 'vchoisk', 'v@gmail.com', 'sab');
insert into rater (id, firstname, lastname, gender, username, email, password) values (2, 'Chris', 'M', 'potato', 'c@gmail.com', 'sab');
insert into rater (id, firstname, lastname, gender, username, email, password) values (3, 'Joanne', 'F', 'jiejie', 'j@gmail.com', 'sab');
insert into rater (id, firstname, lastname, gender, username, email, password) values (4, 'Nikki', 'F', 'nikkiG', 'n@gmail.com', 'sab');



-- Insert information to rated table
insert into rated (id, name, gender) values (1, 'Victor', 'M');
insert into rated (id, name, gender) values (2, 'Chris', 'M');
insert into rated (id, name, gender) values (3, 'Joanne', 'F');
insert into rated (id, name, gender) values (4, 'Nikki', 'F');
/*  Execute this file from the command line by typing:
 *    mysql -u root < db/dummy.sql
 *  to create the database and the tables.*/
