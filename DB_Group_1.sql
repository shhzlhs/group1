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
    follower_id INT UNSIGNED NOT NULL,
    following_id INT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (follower_id) REFERENCES Users(id) ,
    FOREIGN KEY (following_id) REFERENCES Users(id),
    UNIQUE KEY  (follower_id,following_id)
);
CREATE TABLE Messages (
   id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
   sender_id INT UNSIGNED,
   receiver_id INT UNSIGNED,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   content    VARCHAR(2000),
   FOREIGN KEY (sender_id) REFERENCES Users (id) ON DELETE CASCADE,
   FOREIGN KEY (receiver_id) REFERENCES Users (id) ON DELETE CASCADE
  );
CREATE TABLE Notifications (
   id 			INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
   user_id 		INT UNSIGNED NOT NULL,
   content     	VARCHAR(255) NOT NULL,
   is_read     	BOOLEAN DEFAULT FALSE NOT NULL,
   creator_id   INT UNSIGNED NOT NULL,
   FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
   FOREIGN KEY (creator_id) REFERENCES Users(id) ON DELETE CASCADE
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
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (item_id) REFERENCES Items(id)
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
VALUES            ("nguoicodon" ,"Trần Ngọc Anh","nhom1@gmail.com" ,"FEMALE"   ,"$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi",'ADMIN',"ACTIVED","user_1.png"),
				  ("queenqueen" ,"Lê Quyên","user123@gmail.com"    ,"FEMALE","$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi",'USER',"ACTIVED","user_2.png"),
				  ("thieuthu11" ,"Hạ Đông Xuân","user0023@gmail.com"    ,"FEMALE","$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi",'USER',"ACTIVED","user_3.png"),
				  ("ngocmaitran" ,"Trần Ngọc Mai","user222223@gmail.com"    ,"FEMALE","$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi",'USER',"ACTIVED","user_4.png"),
				  ("handoi22"  ,"Lê Thị Anh","usernhom1@gmail.com","FEMALE","$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi",'USER' ,"ACTIVED","user_5.png"),
				  ("4cuicamau"  ,"Tư Cùi","ssssss@gmail.com","FEMALE","$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi",'USER' ,"ACTIVED","user6.jpg"),
				  ("duongcoi"  ,"Đông Phương Phương","abcxxxxx@gmail.com","FEMALE","$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi",'USER' ,"ACTIVED","user7.jpg"),
				  ("sh$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi"  ,"Sử Thanh Thanh","nguoicungkho@gmail.com","FEMALE","$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi",'USER' ,"ACTIVED","user8.jpg"),
				  ("ciuciuaa"  ,"Đỗ Thị Trúc","akelaaaa@gmail.com","FEMALE","$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi",'USER' ,"ACTIVED","user9.jpg"),
				  ("chiahhh"  ,"Trần Chi Chi","themyeu44@gmail.com","FEMALE","$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi",'USER' ,"ACTIVED","user10.jpg"),
				  ("omomatic"  ,"Đặng Văn La","mephimtruong@gmail.com","FEMALE","$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi",'USER' ,"ACTIVED","user11.jpg"),
				  ("lemmlem"  ,"Châu Việt Cường","oigoidi@gmail.com","MALE","$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi",'USER' ,"ACTIVED","user12.jpg"),
				  ("sktt1000"  ,"Lê Văn Luyện","amnlgggg@gmail.com","MALE","$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi",'USER' ,"ACTIVED","user13.jpg"),
                   ("vietnamese1", "Trần Văn Hùng", "hung123@gmail.com", "MALE", "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi", "USER", "ACTIVED", "user14.jpg"),
    ("hangping", "Nguyễn Thị Hằng", "hang456@gmail.com", "FEMALE", "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi", "USER", "ACTIVED", "user15.jpg"),
    ("tamtit", "Phạm Minh Tâm", "tam789@gmail.com", "MALE", "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi", "USER", "ACTIVED", "user16.jpg"),
    ("oeoeoe", "Lê Thị Huệ", "hue1234@gmail.com", "FEMALE", "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi", "USER", "ACTIVED", "user17.jpg"),
    ("ducvann", "Nguyễn Văn Đức", "duc567@gmail.com", "MALE", "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi", "USER", "ACTIVED", "user18.jpg"),
    ("supertoan", "Phạm Văn Toàn", "toan$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi@gmail.com", "MALE", "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi", "USER", "ACTIVED", "user19.jpg"),
    ("anhanhtran", "Trần Thị Ánh", "anh6789@gmail.com", "FEMALE", "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi", "USER", "ACTIVED", "user20.jpg"),
    ("leminhkhoi", "Lê Minh Khôi", "khoi$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi6@gmail.com", "MALE", "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi", "USER", "ACTIVED", "user21.jpg"),
    ("quyennv", "Nguyễn Văn Quyền", "quyen123@gmail.com", "MALE", "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi", "USER", "ACTIVED", "user22.jpg"),
    ("tongfd", "Phạm Văn Thuận", "thuan1234@gmail.com", "MALE", "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi", "USER", "ACTIVED", "user23.jpg"),
    ("hithahit", "Lê Thị Hương", "huong5678@gmail.com", "FEMALE", "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi", "USER", "ACTIVED", "user24.jpg"),
    ("tuanzebe", "Trần Văn Tuấn", "tuan$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi@gmail.com", "MALE", "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi", "USER", "ACTIVED", "user25.jpg"),
    ("maihqua", "Nguyễn Thị Mai", "mai1234@gmail.com", "FEMALE", "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi", "USER", "ACTIVED", "user26.jpg"),
    ("ulatrois", "Phạm Văn Lâm", "lam123@gmail.com", "MALE", "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi", "USER", "ACTIVED", "user27.jpg"),
    ("thaottt", "Lê Thị Thảo", "thao123@gmail.com", "FEMALE", "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi", "USER", "ACTIVED", "user28.jpg"),
    ("loileleoi", "Trần Văn Lợi", "loi1234@gmail.com", "MALE", "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi", "USER", "ACTIVED", "user29.jpg"),
    ("ngocntt", "Nguyễn Thị Ngọc", "ngoc1234@gmail.com", "FEMALE", "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi", "USER", "ACTIVED", "user30.jpg"),
    ("sptttt", "Phạm Văn Thành", "thanh123@gmail.com", "MALE", "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi", "USER", "ACTIVED", "user31.jpg"),
    ("scus1902", "Lê Thị Hạnh", "hanh$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi@gmail.com", "FEMALE", "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi", "USER", "ACTIVED", "user32.jpg"),
    ("phucltt", "Trần Văn Phúc", "phuc1234@gmail.com", "MALE", "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi", "USER", "ACTIVED", "user33.jpg"),
    ("thaococo", "Nguyễn Thị Thảo", "thao5678@gmail.com", "FEMALE", "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi", "USER", "ACTIVED", "user34.jpg"),
    ("hiegachoi", "Phạm Văn Hiệp", "hiep$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi@gmail.com", "MALE", "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi", "USER", "ACTIVED", "user35.jpg"),
    ("uktu", "Lê Thị Nga", "nga1234@gmail.com", "FEMALE", "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi", "USER", "ACTIVED", "user36.jpg"),
    ("prozzzzt", "Trần Thị Thủy", "thuy123@gmail.com", "FEMALE", "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi", "USER", "ACTIVED", "user37.jpg"),
    ("gggsssssd", "Nguyễn Văn Dũng", "dung$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi@gmail.com", "MALE", "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi", "USER", "ACTIVED", "user38.jpg"),
    ("nowayhome", "Phạm Văn Cường", "cuong1234@gmail.com", "MALE", "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi", "USER", "ACTIVED", "user39.jpg"),
    ("masachu", "Lê Thị Lợi", "loi$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi@gmail.com", "FEMALE", "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi", "USER", "ACTIVED", "user40.jpg"),
    ("zukhov1945", "Trần Văn Định", "dinh123@gmail.com", "MALE", "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi", "USER", "ACTIVED", "user41.jpg"),
    ("hoanokmau", "Nguyễn Thị Hoa", "hoa1234@gmail.com", "FEMALE", "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi", "USER", "ACTIVED", "user42.jpg"),
    ("vietnamese30", "Phạm Văn Tín", "tin$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi@gmail.com", "MALE", "$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi", "USER", "ACTIVED", "user43.jpg");
INSERT INTO Items (`name`,image,coin_cost,gold_cost,`type`)
VALUES            ("Mũ phù thuỷ","item_1.png",0,100,"CAP"),
				 ("Nón rơm","item_2.png",1000,0,"CAP"),
				 ("Iphone XX","item_3.png",0,10000,"EQUIP"),
				 ("Gậy pháp sư","item_4.png",0,500,"EQUIP"),
				 ("Giày pha lê","item_5.png",1000000,0,"OTHER"),
				 ("Tóc quý tộc","item_6.png",0,5000,"OTHER"),
				 ("Áo Hoàng tử","item_7.png",0,1000000,"SHIRT");
INSERT INTO `Follows`(follower_id,following_id)
VALUES               (2,1),(3,1),(4,1),(5,1),(6,1),(7,1),(8,1),(9,1),(10,1),(11,1),(12,1),(13,1),(14,1),(15,1),(16,1),(17,1),(18,1),(19,1),
					 (1,2),(1,3),(1,4),(1,5),(1,6),(1,11),(1,12),(1,13),(1,20),(1,23),(1,22),(1,31),(1,24),(1,35),(1,29),(1,38),(1,27),(1,34),(1,40),(1,26);
INSERT INTO User_item(user_id,item_id)
VALUES               (1,1),
					 (1,2),
					 (2,2);
INSERT INTO Posts (user_id,image,content,created_at)
VALUES			  (1,"post_1.png","Chào mọi người!","2022-10-10"),
				  (1,"post_2.png","Tạm biệt mọi người!","2023-09-01"),
				  (2,"post_3.png","Hello Everyone!!!","2023-09-11"),
				  (3,"post4.jpg","Một mình buồnq quá đi!","2022-12-01"),
				  (4,"post6.jpg","Chào 500 anh em nhé!","2022-03-01"),
				  (5,"post7.jpg","Chào 500 anh em nhé!","2021-12-01"),
				  (5,"post8.jpg","ai nhắn tin làm quen với mình không?!","2022-02-01"),
				  (2,"post9.jpg","Hình như e có điều muốn nói...","2023-03-01"),
				  (1,"post_5.png","Ta đã quay trở lại!Hehe","2023-01-01");

INSERT INTO Comments (post_id,user_id,content,reply_to)
VALUES			  (1,2,"OK",NULL),
				  (2,3,"Woao",NULL),
				  (1,3,"Úi dồi",NULL),
				  (2,1,"kkk",NULL),
                  (NULL,2,"Hahaha",3),
                  (3,11,"Ai đó hãy cứu lấy cô ấy đi!",NULL),
                  (3,31,"Mát không?",NULL),
                  (3,24,"Nhà mất điện à?",NULL),
                  (3,40,"Bay xuống đây tôi đỡ",NULL),
                  (NULL,19,"CHịu!",6),
				  (1,1,"Đã xem:)",NULL);
                  
INSERT INTO Likes (post_id,user_id,comment_id)
VALUES			  (1,2,NULL),
				  (8,1,NULL),
				  (5,1,NULL),
				  (5,2,NULL),
				  (5,11,NULL),
				  (5,12,NULL),
				  (5,13,NULL),
				  (5,14,NULL),
				  (5,15,NULL),
				  (5,16,NULL),
				  (5,20,NULL),
				  (5,21,NULL),
				  (5,27,NULL),
				  (5,28,NULL),
				  (5,9,NULL),
				  (5,10,NULL),
				  (5,30,NULL),
				  (5,31,NULL),
				  (5,32,NULL),
				  (5,40,NULL),
				  (5,35,NULL),
				  (2,3,NULL),
				  (1,3,NULL),
				  (1,27,NULL),
				  (1,28,NULL),
				  (1,29,NULL),
				  (1,31,NULL),
				  (1,33,NULL),
				  (1,37,NULL),
				  (1,18,NULL),
				  (1,16,NULL),
				  (1,12,NULL),
				  (1,39,NULL),
				  (1,4,NULL),
				  (1,5,NULL),
				  (1,6,NULL),
				  (1,7,NULL),
				  (1,8,NULL),
				  (1,10,NULL),
				  (2,1,NULL),
				  (NULL,1,1),
				  (3,1,NULL),
				  (3,2,NULL),
				  (3,5,NULL),
				  (3,33,NULL),
				  (3,22,NULL),
				  (3,14,NULL),
				  (4,12,NULL),
				  (4,14,NULL),
				  (4,11,NULL),
				  (4,21,NULL),
				  (4,34,NULL),
				  (4,16,NULL),
				  (4,22,NULL),
				  (4,4,NULL),
				  (NULL,2,1),
				  (1,1,NULL);
                  
INSERT INTO Reports(reporter_id, report_to_user, post_id, comment_id, content)
VALUES
					(1,2,NULL, NULL,"Người này quá đẹp trai!"),
					(2,1,NULL, NULL,"Thích thì report"),
					(3,NULL,3, NULL,"Post truyền tải nội dung xấu"),
					(1,NULL,3, NULL,"Hãy ngăn người này lại@@"),
					(3,NULL,NULL, 5,"Có ý trêu trọc"),
					(1,NULL,NULL, 4,"Tôi không muốn người này comment");
INSERT INTO Notifications(user_id, content, creator_id)
VALUES					 (1		 , "Lê Anh đã bình luận bài viết của bạn",2),
						 (1		 , "Hạ Đông Xuân đã bình luận bài viết của bạn",3),
						 (2		 , "Hạ Đông Xuân đã bình luận bài viết của bạn",3),
						 (3		 , "Lê Anh đã bình luận bài viết của bạn",2),
						 (3		 , "Lê Văn Anh đã thích bài viết của bạn",1);
                  

