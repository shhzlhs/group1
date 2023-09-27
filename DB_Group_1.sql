DROP DATABASE IF EXISTS group_1;
CREATE DATABASE group_1;
USE group_1;
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE KEY,
    email VARCHAR(255) NOT NULL UNIQUE KEY,
    `password` VARCHAR(255) NOT NULL,
    `role` ENUM("ADMIN","USER") DEFAULT "USER",
    `status` ENUM("ACTIVED", "U_ACTIVE") DEFAULT "U_ACTIVE",
    coin   BIGINT DEFAULT 1000,
    gold   INT DEFAULT 0,
    avatar VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    image VARCHAR(255) NOT NULL,
    content VARCHAR(2000),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);
CREATE TABLE Comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT,
    user_id INT,
    content VARCHAR(2000) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES Posts(id),
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE Likes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT,
    user_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES Posts(id),
    FOREIGN KEY (user_id) REFERENCES Users(id),
    UNIQUE KEY (post_id,user_id)
);

CREATE TABLE `Follows` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    follower_id INT,
    following_id INT,
    created_id TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (follower_id) REFERENCES Users(id),
    FOREIGN KEY (following_id) REFERENCES Users(id),
    UNIQUE KEY  (follower_id,following_id)
);
CREATE TABLE Messages (
   id INT AUTO_INCREMENT PRIMARY KEY,
   sent_id INT,
   received_id INT,
   FOREIGN KEY (sent_id) REFERENCES Users (id),
   FOREIGN KEY (received_id) REFERENCES Users (id)
  );
CREATE TABLE Notifications (
   id 			INT AUTO_INCREMENT PRIMARY KEY,
   user_id 	INT NOT NULL,
   content     VARCHAR(255) NOT NULL,
   FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);
CREATE TABLE Items(
    id     INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR (50),
    image  VARCHAR(255),
    coin_cost INT NOT NULL,
    gold_cost INT NOT NULL
    );
CREATE TABLE User_item(
    id     INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    item_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (item_id) REFERENCES Items(id) ON DELETE CASCADE
    );
-- Games: -- 
CREATE TABLE Games (
id     TINYINT AUTO_INCREMENT PRIMARY KEY,
`name` VARCHAR(255) NOT NULL
);
CREATE TABLE Game_slot (
id INT AUTO_INCREMENT PRIMARY KEY,
user_id INT NOT NULL,
game_id TINYINT NOT NULL,
FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
FOREIGN KEY (game_id) REFERENCES Games(id) ON DELETE CASCADE
);
CREATE TABLE Questions(
id      INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
content VARCHAR(500) UNIQUE KEY NOT NULL,
`number` TINYINT NOT NULL
);

CREATE TABLE Answers(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
content VARCHAR(500) NOT NULL,
q_id INT UNSIGNED NOT NULL,
is_true VARCHAR(2),
FOREIGN KEY (q_id) REFERENCES Questions(id) ON DELETE CASCADE
);
INSERT INTO Users (username ,  email              ,`password`													 ,`role` ,`status`)
VALUES            ("admin1" ,"nhom1@gmail.com"    ,"$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi",'ADMIN',"ACTIVED"),
				  ("user1"  ,"usernhom1@gmail.com","$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi",'USER' ,"ACTIVED");

