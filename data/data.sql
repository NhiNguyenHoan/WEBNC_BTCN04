INSERT INTO `retrodb`.`users` (`full_name`, `email`, `username`, `password`) VALUES ('Nhi Nguyen', 'nguyenhoantuyetnhi@gmail.com', 'nhihtnguyen', '123456');

INSERT INTO `retrodb`.`boards` (`user_id`, `title`, `description`) VALUES ('1', 'New Board1', 'WentWell-Improve-Action');
INSERT INTO `retrodb`.`boards` (`user_id`, `title`, `description`) VALUES ('1', 'New Board 2', 'Start-Stop-Continute');
INSERT INTO `retrodb`.`boards` (`user_id`, `title`, `description`) VALUES ('1', 'New Board 3', 'Happy-Meh-Sad');

INSERT INTO `retrodb`.`cards` (`board_id`, `column_index`, `note`) VALUES ('1', '1', 'Done Homework');
INSERT INTO `retrodb`.`cards` (`board_id`, `column_index`, `note`) VALUES ('1', '2', 'Deadline');
INSERT INTO `retrodb`.`cards` (`board_id`, `column_index`, `note`) VALUES ('1', '3', 'Do homework as soon as possible');

