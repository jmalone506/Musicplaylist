DROP DATABASE IF EXISTS musicplaylist_db;
CREATE DATABASE musicplaylist_db;
USE musicplaylist_db;

CREATE TABLE user
(
    id int NOT NULL AUTO_INCREMENT,
    firstname varchar(50) NOT NULL,
    lastname varchar(50) NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE playlist
(
    id int NOT NULL AUTO_INCREMENT,
    genre varchar(50) NOT NULL,
    song varchar(50) NOT NULL,
    artist varchar(50) NOT NULL,
    PRIMARY KEY (id)
);
