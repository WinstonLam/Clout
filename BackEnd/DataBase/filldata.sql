DROP DATABASE IF EXISTS `LINGO`;
CREATE DATABASE `LINGO`;
USE `LINGO`;
CREATE Table words
        (
                Id int auto_increment primary KEY NOT NULL,
                word varchar(50),
                description varchar(50),
                wordlistID int

        );
CREATE Table `wordlist`
    (
        Id int auto_increment primary key NOT NULL,
        Name varchar(50),
        description varchar(50),
        userID varchar(100)
    );
CREATE procedure LINGO.whileLoop()
wholeblock:BEGIN
  declare x INT default 0;
  SET x = 1;

  WHILE x <= 10 DO
    INSERT INTO `words` (word, description, wordlistID)
        VALUES (CONCAT('word', x) , CONCAT('description -test ', x) ,1);
        INSERT INTO `wordlist` (Name, description,userID)
        VALUES (CONCAT('testList',x), CONCAT('description of testList- ',x),'1');
        SET x = x + 1;
  END WHILE;
END;
call whileloop()
