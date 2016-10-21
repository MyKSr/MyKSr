/* Use the myksr database */
use myksr;

-- -- Insert information to rater table
--
-- insert into rater (raterId, firstname, lastname, gender, username, email, password) values (null, 'Victor', 'Choi', 'M', 'vchoisk', 'v@gmail.com', 'sab');
-- insert into rater (raterId, firstname, lastname, gender, username, email, password) values (null, 'Chris', 'Doo', 'M', 'potato', 'c@gmail.com', 'sab');
-- insert into rater (raterId, firstname, lastname, gender, username, email, password) values (null, 'Joanne', 'Xin', 'F', 'jiejie', 'j@gmail.com', 'sab');
-- insert into rater (raterId, firstname, lastname, gender, username, email, password) values (null, 'Nikki', 'Galusha', 'F', 'nikkiG', 'n@gmail.com', 'sab');




-- Insert information to rated table
insert into rated (ratedId, name, gender, pic) values (null, 'Victor', 'M', '../assets/victor.png');
insert into rated (ratedId, name, gender, pic) values (null, 'Chris', 'M', '../assets/chris.png');
insert into rated (ratedId, name, gender, pic) values (null, 'Joanne', 'F', '../assets/joanne.jpg');
insert into rated (ratedId, name, gender, pic) values (null, 'Nikki', 'F', '../assets/nikki.png');
insert into rated (ratedId, name, gender, pic) values (null, 'Sean', 'M', '../assets/sean.jpg');
insert into rated (ratedId, name, gender, pic) values (null, 'Alex', 'M', '../assets/alex.png');
insert into rated (ratedId, name, gender, pic) values (null, 'Alina', 'F', '../assets/alina.png');
insert into rated (ratedId, name, gender, pic) values (null, 'Andrew', 'M', '../assets/andrew.png');
insert into rated (ratedId, name, gender, pic) values (null, 'Bruna', 'F', '../assets/bruna.png');
insert into rated (ratedId, name, gender, pic) values (null, 'Conor', 'M', '../assets/conor.png');
insert into rated (ratedId, name, gender, pic) values (null, 'David', 'M', '../assets/david.png');
insert into rated (ratedId, name, gender, pic) values (null, 'Gerald', 'M', '../assets/gerald.png');
insert into rated (ratedId, name, gender, pic) values (null, 'Jason', 'M', '../assets/jason.png');
insert into rated (ratedId, name, gender, pic) values (null, 'Jeff', 'M', '../assets/jeff.png');
insert into rated (ratedId, name, gender, pic) values (null, 'Jemil', 'M', '../assets/jemil.png');
insert into rated (ratedId, name, gender, pic) values (null, 'Lizzie', 'F', '../assets/lizzie.png');
insert into rated (ratedId, name, gender, pic) values (null, 'Masashi', 'M', '../assets/masashi.png');
insert into rated (ratedId, name, gender, pic) values (null, 'Melba', 'F', '../assets/melba.png');
insert into rated (ratedId, name, gender, pic) values (null, 'Michelle', 'F', '../assets/michelle.png');
insert into rated (ratedId, name, gender, pic) values (null, 'Natasha', 'F', '../assets/natasha.png');
insert into rated (ratedId, name, gender, pic) values (null, 'Zack', 'M', '../assets/zack.png');
/*  Execute this file from the command line by typing:
 *    mysql -u root < db/dummy.sql
 *  to create the database and the tables.*/
