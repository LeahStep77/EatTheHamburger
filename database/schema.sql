To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE hamburger_db;
USE hamburger_db;

-- Create the table plans.
CREATE TABLE hamburgers
(
id int NOT NULL AUTO_INCREMENT,
hamburger_name varchar(255) NOT NULL,
devoured BOOL DEFAULT false,
PRIMARY KEY (id)
);

INSERT INTO burgers (hamburger_name, devoured) VALUES ("Avacado Burger", FALSE);
