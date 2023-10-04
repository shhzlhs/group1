DROP DATABASE IF EXISTS group_1;
CREATE DATABASE group_1;
USE group_1;
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE KEY,
    full_name VARCHAR(255) NOT NULL,
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
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (follower_id) REFERENCES Users(id),
    FOREIGN KEY (following_id) REFERENCES Users(id),
    UNIQUE KEY  (follower_id,following_id)
);
CREATE TABLE Messages (
   id INT AUTO_INCREMENT PRIMARY KEY,
   sender_id INT,
   receiver_id INT,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   FOREIGN KEY (sender_id) REFERENCES Users (id),
   FOREIGN KEY (receiver_id) REFERENCES Users (id)
  );
CREATE TABLE Notifications (
   id 			INT AUTO_INCREMENT PRIMARY KEY,
   user_id 		INT NOT NULL,
   content     	VARCHAR(255) NOT NULL,
   is_read     	BOOLEAN DEFAULT FALSE,
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
`name` VARCHAR(255) NOT NULL,
slot_price INT NOT NULL
);
CREATE TABLE Game_slot (
id         INT AUTO_INCREMENT PRIMARY KEY,
user_id INT NOT NULL,
game_id TINYINT NOT NULL,
slot    INT DEFAULT 3,
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
INSERT INTO Users (username ,full_name,  email              ,`password`													 ,`role` ,`status`,avatar)
VALUES            ("admin1" ,"Lê Văn Anh","nhom1@gmail.com"    ,"$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi",'ADMIN',"ACTIVED","user_1.png"),
				  ("user2" ,"Lê Anh","user123@gmail.com"    ,"$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi",'USER',"ACTIVED","user_2.png"),
				  ("user1"  ,"Lê Thị Anh","usernhom1@gmail.com","$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi",'USER' ,"ACTIVED","user_3.png");
INSERT INTO Items (`name`,image,coin_cost,gold_cost)
VALUES            ("Mũ phù thuỷ","item_1.png",0,100),
				 ("Nón rơm","item_2.png",1000,0);
INSERT INTO `Follows`(follower_id,following_id)
VALUES               (1,2),
					 (1,3),
					 (2,3),
					 (3,2),
					 (2,1);
INSERT INTO User_item(user_id,item_id)
VALUES               (1,1),
					 (1,2),
					 (2,2);
INSERT INTO Posts (user_id,image,content)
VALUES			  (1,"post_1.png","Chào mọi người"),
				  (1,"post_2.png","Tạm biệt mọi người"),
				  (2,"post_3.png","Vĩnh biệt mọi người"),
				  (3,"post_4.png","Chào 500 anh em nhé!"),
				  (1,"post_5.png","Ta đã quay trở lại");
INSERT INTO Likes (post_id,user_id)
VALUES			  (1,2),
				  (2,3),
				  (1,3),
				  (2,1),
				  (1,1);
INSERT INTO Comments (post_id,user_id,content)
VALUES			  (1,2,"OK"),
				  (2,3,"Woao"),
				  (1,3,"Úi dồi"),
				  (2,1,"kkk"),
				  (1,1,"Đã xem:)");
                  

