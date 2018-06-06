drop database if exists icebreakers_db;
create database icebreakers_db;

use icebreakers_db;

create table users(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    middle_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    photo_link VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    phone_number INT(10),
    age INT(3),
    member_since DATETIME DEFAULT NOW() NOT NULL,
    challenge_id VARCHAR(255),
    user_points INT,
    primary key (id)
);

create table challenges(
    id INT NOT NULL AUTO_INCREMENT,
    challenge_task VARCHAR(255) NOT NULL,
    point_value INT NOT NULL,
	primary key (id)
);

create table recommendations(
    id INT NOT NULL AUTO_INCREMENT,
    challenge_task VARCHAR(255) NOT NULL,
    point_value INT NOT NULL,
    primary key (id)
);