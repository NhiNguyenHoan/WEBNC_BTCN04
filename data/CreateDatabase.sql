drop database retrodb;
create database retrodb;
use retrodb;

select * from users;
select * from boards;
select * from cards;

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(30),
  `email` varchar(30) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  `createdAt` timestamp,
`updatedAt` timestamp,
  UNIQUE KEY `email_UNIQUE` (`email`),
  PRIMARY KEY (`user_id`)
) ;

create table`boards`(
`id` int(11) not null auto_increment,
`user_id` int(11) not null,
`title` varchar(30) not null,
`description` varchar(30) not null,
`createdAt` timestamp,
`updatedAt` timestamp,
PRIMARY KEY (`id`),
CONSTRAINT `user_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`)
);

create table`cards`(
`card_id` int(11) not null auto_increment,
`board_id` int(11) not null,
`column_index` int(11) not null,
`note` varchar(100) not null,
`createdAt` timestamp,
`updatedAt` timestamp,
PRIMARY KEY (`card_id`),
CONSTRAINT `board_fk` FOREIGN KEY (`board_id`) REFERENCES `boards`(`id`)
);


