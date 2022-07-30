-- Active: 1659048540651@@127.0.0.1@3306@user_information
CREATE DATABASE IF NOT EXISTS user_information;

USE user_information;

CREATE TABLE IF NOT EXISTS t_user (
    `user_name` VARCHAR(15) NOT NULL,
    `user_email` VARCHAR(20) NOT NULL,
    `user_admin` BOOLEAN DEFAULT 0,
    `user_age` TINYINT(2) NOT NULL
);

INSERT INTO t_user (
    `user_name`, 
    `user_email`, 
    `user_admin`,
    `user_age`
)
VALUES (
    'Micheal',
    'Micheal.Myers@gmail.com',
    FALSE,
    30
);