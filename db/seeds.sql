use icebreakers_db;

-- users tabledata
insert into users (first_name, middle_name, last_name, photo_link, email, phone_number, age, challenge_id, user_points, createdAt, updatedAt)
values ("Nicholas", "Madrid", "Edwards", "photolink", "n.m.e.dummyemail@gmail.com", "7086622234", 18, "[1,4,6,12,10]", 5, NOW(), NOW());

insert into users (first_name, middle_name, last_name, photo_link, email, phone_number, age, challenge_id, user_points, createdAt, updatedAt)
values ("Daniel", "Remember", "Alamo", "photolink", "dalamo.dummyemail@gmail.com", "3125484991", 26, "[1,5,3,7,9]", 5, NOW(), NOW());

insert into users (first_name, middle_name, last_name, photo_link, email, phone_number, age, challenge_id, user_points, createdAt, updatedAt)
values ("Halle", "Reid", "Conger", "photolink", "halle.dummyemail@gmail.com", "4136131284", 26, "[5,4,7,12,9]", 5, NOW(), NOW());

insert into users (first_name, middle_name, last_name, photo_link, email, phone_number, age, challenge_id, user_points, createdAt, updatedAt)
values ("Tahrah", "Leah", "Perry", "photolink", "tahrah.dummyemail@gmail.com", "6304306422", 26, "[1,13,3,12,9]", 5, NOW(), NOW());

insert into users (first_name, middle_name, last_name, photo_link, email, phone_number, age, challenge_id, user_points, createdAt, updatedAt)
values ("Ali", "Prince", "Arfeen", "photolink", "ali.dummyemail@gmail.com", "5689930088", 26, "[6,4,3,12,9]", 5, NOW(), NOW());

-- challenege table data
insert into challenges (challenge_task, point_value, createdAt, updatedAt)
values ("Ask an employee their name.", 50, NOW(), NOW());

insert into challenges (challenge_task, point_value, createdAt, updatedAt)
values ("Ask for a discount when paying for meal or drink.", 100, NOW(), NOW());

insert into challenges (challenge_task, point_value, createdAt, updatedAt)
values ("Pay for the person behind you.", 75, NOW(), NOW());

insert into challenges (challenge_task, point_value, createdAt, updatedAt)
values ("Ask a random person (employee or not) how their day is going.", 50, NOW(), NOW());

insert into challenges (challenge_task, point_value, createdAt, updatedAt)
values ("Leave a 100% tip.", 100, NOW(), NOW());

insert into challenges (challenge_task, point_value, createdAt, updatedAt)
values ("If someone is sitting alone, ask if you can share their table.", 100, NOW(), NOW());

insert into challenges (challenge_task, point_value, createdAt, updatedAt)
values ("Give someone a compliment.", 50, NOW(), NOW());

insert into challenges (challenge_task, point_value, createdAt, updatedAt)
values ("Ask someone what they would recommend and then order it.", 50, NOW(), NOW());

insert into challenges (challenge_task, point_value, createdAt, updatedAt)
values ("Priase an employee to their manager for a job well done.", 75, NOW(), NOW());

insert into challenges (challenge_task, point_value, createdAt, updatedAt)
values (" Buy a meal from wherever you are and give it away to someone in need.", 75, NOW(), NOW());

insert into challenges (challenge_task, point_value, createdAt, updatedAt)
values ("Leave money in a donation jar, if the location has one.", 50, NOW(), NOW());

insert into challenges (challenge_task, point_value, createdAt, updatedAt)
values ("Tell someone a joke.", 50, NOW(), NOW());

insert into challenges (challenge_task, point_value, createdAt, updatedAt)
values ("Ask someone three questions and exchange LinkedIn information to network", 100, NOW(), NOW());

insert into challenges (challenge_task, point_value, createdAt, updatedAt)
values ("Challenge someone to the game 'Two Truths and A Lie'.", 75, NOW(), NOW());

-- recommendation data
insert into recommendations (challenge_task, point_value, createdAt, updatedAt)
values ("Offer your cashier a high five.", 100, NOW(), NOW());

insert into recommendations (challenge_task, point_value, createdAt, updatedAt)
values ("Intoduce yourself to someone next to you.", 75, NOW(), NOW());