DROP DATABASE IF EXISTS group_1;
CREATE DATABASE group_1;
USE group_1;
CREATE TABLE Users (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE KEY,
    gender ENUM("MALE","FEMALE","OTHER","UN_KNOW") NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `role` ENUM("ADMIN","USER") DEFAULT "USER",
    `status` ENUM("ACTIVED", "U_ACTIVE") DEFAULT "U_ACTIVE",
    coin   BIGINT DEFAULT 1000,
    gold   INT DEFAULT 0,
    avatar VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Posts (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id INT UNSIGNED,
    image VARCHAR(255) NOT NULL,
    content VARCHAR(2000),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);
CREATE TABLE Comments (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    post_id INT UNSIGNED,
    reply_to INT UNSIGNED,
    user_id INT UNSIGNED,
    content VARCHAR(2000) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES Posts(id) ON DELETE CASCADE,
    FOREIGN KEY (reply_to) REFERENCES Comments(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);
CREATE TABLE Reports(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    reporter_id INT UNSIGNED,
    report_to_user INT UNSIGNED,
    post_id INT UNSIGNED,
    comment_id INT UNSIGNED,
    content VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (reporter_id) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (report_to_user) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (post_id) REFERENCES Posts (id) ON DELETE CASCADE,
    FOREIGN KEY (comment_id) REFERENCES Comments (id) ON DELETE CASCADE
    );
    

CREATE TABLE Likes (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    post_id INT UNSIGNED,
    comment_id INT UNSIGNED,
    user_id INT UNSIGNED,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES Posts(id) ON DELETE CASCADE,
    FOREIGN KEY (comment_id) REFERENCES Comments(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users(id)ON DELETE CASCADE,
    UNIQUE KEY (post_id,user_id)
);

CREATE TABLE `Follows` (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    follower_id INT UNSIGNED,
    following_id INT UNSIGNED,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (follower_id) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (following_id) REFERENCES Users(id) ON DELETE CASCADE,
    UNIQUE KEY  (follower_id,following_id)
);
CREATE TABLE Messages (
   id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
   sender_id INT UNSIGNED,
   receiver_id INT UNSIGNED,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   FOREIGN KEY (sender_id) REFERENCES Users (id) ON DELETE CASCADE,
   FOREIGN KEY (receiver_id) REFERENCES Users (id) ON DELETE CASCADE
  );
CREATE TABLE Notifications (
   id 			INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
   user_id 		INT UNSIGNED NOT NULL,
   content     	VARCHAR(255) NOT NULL,
   is_read     	BOOLEAN DEFAULT FALSE,
   FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);
CREATE TABLE Items(
    id     INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `type` ENUM("CAP","SHIRT","TROUSERS","EQUIP","OTHER") NOT NULL,
    `name` VARCHAR (50),
    image  VARCHAR(255),
    coin_cost INT NOT NULL,
    gold_cost INT NOT NULL
    );
CREATE TABLE User_item(
    id     INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id INT UNSIGNED NOT NULL,
    item_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (item_id) REFERENCES Items(id) ON DELETE CASCADE
    );

CREATE TABLE Transaction_History(
id 			INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
coin_or_gold ENUM ("C","G") NOT NULL,
`type`      ENUM ("UP","DOWN") NOT NULL,
changed_number INT UNSIGNED NOT NULL,
last_balance   BIGINT,
created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
user_id		INT UNSIGNED,
FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);
-- Games: -- 
CREATE TABLE Games (
id     TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
`name` VARCHAR(255) NOT NULL,
slot_price INT NOT NULL
);
CREATE TABLE Game_slot (
id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
user_id INT UNSIGNED NOT NULL,
game_id TINYINT UNSIGNED NOT NULL,
slot    INT DEFAULT 3,
FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
FOREIGN KEY (game_id) REFERENCES Games(id) ON DELETE CASCADE
);
CREATE TABLE Questions(
id      INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
content VARCHAR(500) UNIQUE KEY NOT NULL,
`number` TINYINT UNSIGNED NOT NULL
);

CREATE TABLE Answers(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
content VARCHAR(500) NOT NULL,
q_id INT UNSIGNED NOT NULL,
is_true VARCHAR(2),
FOREIGN KEY (q_id) REFERENCES Questions(id) ON DELETE CASCADE
);
INSERT INTO Users (username ,full_name,  email,gender              ,`password`													 ,`role` ,`status`,avatar)
VALUES            ("admin1" ,"Lê Văn Anh","nhom1@gmail.com" ,"MALE"   ,"$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi",'ADMIN',"ACTIVED","user_1.png"),
				  ("user2" ,"Lê Anh","user123@gmail.com"    ,"FEMALE","$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi",'USER',"ACTIVED","user_2.png"),
				  ("user1"  ,"Lê Thị Anh","usernhom1@gmail.com","FEMALE","$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi",'USER' ,"ACTIVED","user_3.png");
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

INSERT INTO Comments (post_id,user_id,content,reply_to)
VALUES			  (1,2,"OK",NULL),
				  (2,3,"Woao",NULL),
				  (1,3,"Úi dồi",NULL),
				  (2,1,"kkk",NULL),
                  (NULL,2,"Hahaha",3),
				  (1,1,"Đã xem:)",NULL);
                  
INSERT INTO Likes (post_id,user_id,comment_id)
VALUES			  (1,2,NULL),
				  (2,3,NULL),
				  (1,3,NULL),
				  (2,1,NULL),
				  (NULL,1,1),
				  (NULL,2,1),
				  (1,1,NULL);
                  
INSERT INTO Reports(reporter_id, report_to, post_id, comment_id, content)
VALUES
					(1,2,NULL, NULL,"Người này quá đẹp trai!"),
                  

