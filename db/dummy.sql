/* Use the myksr database */
use myksr;

-- -- Insert information to rater table
--
-- insert into rater (raterId, firstname, lastname, gender, username, email, password) values (null, 'Victor', 'Choi', 'M', 'vchoisk', 'v@gmail.com', 'sab');
-- insert into rater (raterId, firstname, lastname, gender, username, email, password) values (null, 'Chris', 'Doo', 'M', 'potato', 'c@gmail.com', 'sab');
-- insert into rater (raterId, firstname, lastname, gender, username, email, password) values (null, 'Joanne', 'Xin', 'F', 'jiejie', 'j@gmail.com', 'sab');
-- insert into rater (raterId, firstname, lastname, gender, username, email, password) values (null, 'Nikki', 'Galusha', 'F', 'nikkiG', 'n@gmail.com', 'sab');




-- Insert information to rated table
insert into rated (ratedId, name, gender) values (null, 'Victor', 'M');
insert into rated (ratedId, name, gender) values (null, 'Chris', 'M');
insert into rated (ratedId, name, gender) values (null, 'Joanne', 'F');
insert into rated (ratedId, name, gender) values (null, 'Nikki', 'F');
insert into rated (ratedId, name, gender) values (null, 'Sean', 'M');
insert into rated (ratedId, name, gender) values (null, 'Alex', 'M');
insert into rated (ratedId, name, gender) values (null, 'Alina', 'F');
insert into rated (ratedId, name, gender) values (null, 'Andrew', 'M');
insert into rated (ratedId, name, gender) values (null, 'Bruna', 'F');
insert into rated (ratedId, name, gender) values (null, 'Conor', 'M');
insert into rated (ratedId, name, gender) values (null, 'David', 'M');
insert into rated (ratedId, name, gender) values (null, 'Gerald', 'M');
insert into rated (ratedId, name, gender) values (null, 'Jason', 'M');
insert into rated (ratedId, name, gender) values (null, 'Jeff', 'M');
insert into rated (ratedId, name, gender) values (null, 'Jemil', 'M');
insert into rated (ratedId, name, gender) values (null, 'Lizzie', 'F');
insert into rated (ratedId, name, gender) values (null, 'Masashi', 'M');
insert into rated (ratedId, name, gender) values (null, 'Melba', 'F');
insert into rated (ratedId, name, gender) values (null, 'Michelle', 'F');
insert into rated (ratedId, name, gender) values (null, 'Natasha', 'F');
insert into rated (ratedId, name, gender) values (null, 'Zack', 'M');
/*  Execute this file from the command line by typing:
 *    mysql -u root < db/dummy.sql
 *  to create the database and the tables.*/
