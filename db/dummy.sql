/* Use the myksr database */
use myksr;

-- Insert information to rater table
insert into rater (id, name, gender) values (1, 'Victor', 'M');
insert into rater (id, name, gender) values (2, 'Chris', 'M');
insert into rater (id, name, gender) values (3, 'Joanne', 'F');
insert into rater (id, name, gender) values (4, 'Nikki', 'F');


-- Insert information to rated table
insert into rated (id, name, gender) values (1, 'Victor', 'M');
insert into rated (id, name, gender) values (2, 'Chris', 'M');
insert into rated (id, name, gender) values (3, 'Joanne', 'F');
insert into rated (id, name, gender) values (4, 'Nikki', 'F');
/*  Execute this file from the command line by typing:
 *    mysql -u root < db/dummy.sql
 *  to create the database and the tables.*/
