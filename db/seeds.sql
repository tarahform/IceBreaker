use icebreakers_db;

-- users tabledata
insert into users (first_name, middle_name, last_name, photo_link, email, phone_number, age, challenge_id, user_points)
values ("Nicholas", "Madrid", "Edwards", "photolink", "n.m.e.dummyemail@gmail.com", 7086622234, 18, "[1,4,6,12,10]", 5);

insert into users (first_name, middle_name, last_name, photo_link, email, phone_number, age, challenge_id, user_points)
values ("Daniel", "Remember", "Alamo", "photolink", "dalamo.dummyemail@gmail.com", 3125484991, 18, "[1,5,3,7,9]", 5);

insert into users (first_name, middle_name, last_name, photo_link, email, phone_number, age, challenge_id, user_points)
values ("Halle", "Reid", "Conger", "photolink", "halle.dummyemail@gmail.com", 4136131284, 18, "[5,4,7,12,9]", 5);

insert into users (first_name, middle_name, last_name, photo_link, email, phone_number, age, challenge_id, user_points)
values ("Tahrah", "Leah", "Perry", "photolink", "tahrah.dummyemail@gmail.com", 6304306422, 18, "[1,13,3,12,9]", 5);

insert into users (first_name, middle_name, last_name, photo_link, email, phone_number, age, challenge_id, user_points)
values ("Ali", "Prince", "Arfeen", "photolink", "ali.dummyemail@gmail.com", 5689930088, 18, "[6,4,3,12,9]", 5);

-- challenege table data
insert into challenges (challenge_task, point_value)
values ("Ask an employee their name.", 50);

insert into challenges (challenge_task, point_value)
values ("Ask for a discount when paying for meal or drink.", 100);

insert into challenges (challenge_task, point_value)
values ("Pay for the person behind you.", 75);

insert into challenges (challenge_task, point_value)
values ("Ask a random person (employee or not) how their day is going.", 50);

insert into challenges (challenge_task, point_value)
values ("Leave a 100% tip.", 100);

insert into challenges (challenge_task, point_value)
values ("If someone is sitting alone, ask if you can share their table.", 100);

insert into challenges (challenge_task, point_value)
values ("Give someone a compliment.", 50);

insert into challenges (challenge_task, point_value)
values ("Ask someone what they would recommend and then order it.", 50);

insert into challenges (challenge_task, point_value)
values ("Priase an employee to their manager for a job well done.", 75);

insert into challenges (challenge_task, point_value)
values (" Buy a meal from wherever you are and give it away to someone in need.", 75);

insert into challenges (challenge_task, point_value)
values ("Leave money in a donation jar, if the location has one.", 50);

insert into challenges (challenge_task, point_value)
values ("Tell someone a joke.", 50);

insert into challenges (challenge_task, point_value)
values ("Ask someone three questions and exchange LinkedIn information to network", 100);

insert into challenges (challenge_task, point_value)
values ("Challenge someone to the game 'Two Trues, One Lie'.", 75);
