/* Use the myksr database */
use myksr;

-- Insert information to users table
insert into users (id, name, gender) values (1, 'Victor', 'M');
insert into users (id, name, gender) values (2, 'Chris', 'M');
insert into users (id, name, gender) values (3, 'Joanne', 'F');
insert into users (id, name, gender) values (4, 'Nikki', 'F');

/*  Execute this file from the command line by typing:
 *    mysql -u root < db/dummy.sql
 *  to create the database and the tables.*/
