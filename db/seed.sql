create table trivia_users (
user_id serial primary key,
email VARCHAR(50),
hash TEXT,
first_name VARCHAR(30),
last_name VARCHAR(30),
username VARCHAR(30),
profile_pic TEXT
); 

INSERT INTO trivia_users (email, hash, first_name, last_name, username, profile_pic)
VALUES
('spencer@me.com', '123', 'Spencer', 'Knowl', 'Cuthbert', 'https://cdnb.artstation.com/p/assets/images/images/003/704/745/large/sadece-kaan-twd-negan-oct-2016.jpg?1476639822'),
('brynne@me.com', '123', 'Brynne', 'Knowl', 'CuteGirl', 'https://vignette.wikia.nocookie.net/walkingdead/images/f/f0/Season_nine_maggie_rhee.png/revision/latest?cb=20190709214001'),
('ryker@me.com', '123', 'Ryker', 'Knowl', 'DancingQueen', 'https://images-na.ssl-images-amazon.com/images/I/61IgPEFc3kL._UX385_.jpg');