drop database if exists icebreakers_db;
create database icebreakers_db;

use icebreakers_db;

create table users(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(255),
    middle_name VARCHAR(255),
    last_name VARCHAR(255),
    photo_link VARCHAR(255),
    email VARCHAR(255),
    phone_number INT(10),
    age INT(3),
    member_since (DATE),
    challenge_id VARCHAR(255),
    user_points INT,
    primary key (id)
);

create table challenges(
    id INT NOT NULL AUTO_INCREMENT,
    point_value INT
);