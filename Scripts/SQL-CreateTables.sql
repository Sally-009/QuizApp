-- Create database
CREATE DATABASE IF NOT EXISTS QuizApp;

-- Use database
USE QuizApp;

-- Create Users table
CREATE TABLE Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Email VARCHAR(255),
    Password VARCHAR(255),	-- encrypt when store
    IsAdmin BOOLEAN
);

-- Create LoginLog table
CREATE TABLE LoginLog (
    LoginLogID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    DateAttempted DATE,
    CONSTRAINT FK_UserID FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- Create QuizSets table
CREATE TABLE QuizSets (
    QuizID INT AUTO_INCREMENT PRIMARY KEY,
    QuizName VARCHAR(255)
);

-- Create UserQuizLog table
CREATE TABLE UserQuizLog (
    QuizLogID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    QuizID INT,
    DateTaken DATE,
    Score INT,
    CONSTRAINT FK2_UserID FOREIGN KEY (UserID) REFERENCES Users(UserID),
    CONSTRAINT FK_QuizID FOREIGN KEY (QuizID) REFERENCES QuizSets(QuizID)
);

-- Create Questions table
CREATE TABLE Questions (
    QuestionID INT AUTO_INCREMENT PRIMARY KEY,
    QuizID INT,
    QuestionText TEXT,
    QuestionImageURL VARCHAR(255),
    CONSTRAINT FK2_QuizID FOREIGN KEY (QuizID) REFERENCES QuizSets(QuizID)
);

-- Create Answers table
CREATE TABLE Answers (
    AnswerID INT AUTO_INCREMENT PRIMARY KEY,
    QuestionID INT,
    AnswerText VARCHAR(255),
    IsCorrect BOOLEAN,
    CONSTRAINT FK_QuestionID FOREIGN KEY (QuestionID) REFERENCES Questions(QuestionID)
);

-- show tables
SHOW TABLES;

SELECT * FROM answers;
SELECT * FROM loginlog;
SELECT * FROM questions;
SELECT * FROM quizsets;
SELECT * FROM userquizlog;
SELECT * FROM users;

desc answers;
desc loginlog;
desc questions;
desc quizsets;
desc userquizlog;
desc users;

-- Mockdata

-- Users
INSERT INTO Users (Email, password, isAdmin) VALUES ('skojima@atu.edu', SHA2('skojima', 256), TRUE);
INSERT INTO Users (Email, password, isAdmin) VALUES ('john@example.com', SHA2('password1', 256), FALSE);
INSERT INTO Users (Email, password, isAdmin) VALUES ('emily@example.com', SHA2('password2', 256), FALSE);
INSERT INTO Users (Email, password, isAdmin) VALUES ('david@example.com', SHA2('password3', 256), FALSE);

-- QuizSets
INSERT INTO QuizSets (QuizName) VALUES ('Dog Breed Quiz');
INSERT INTO QuizSets (QuizName) VALUES ('National Flag Quiz');
INSERT INTO QuizSets (QuizName) VALUES ('Japanese Quiz');

-- Questions
-- Dog Breed
INSERT INTO Questions (QuizID, QuestionText, QuestionImageURL) VALUES 
(1, 'What is the breed of this dog?', 'images/Dog1.png'),
(1, 'What is the breed of this dog?', 'images/Dog2.png'),
(1, 'What is the breed of this dog?', 'images/Dog3.png'),
(1, 'Bulldog is an English dog breed.', 'images/Dog4.png'),
(1, 'Australian Shepherd is developed in Australia.', 'images/Dog5.png'),
(1, 'Is the Shih-Tzu breed originally from China?', 'images/Dog6.png'),
(1, 'Which breed of dog is the smallest in size?', 'images/Dog7.png'),
(1, 'Which breed of dog is the largest in size?', 'images/Dog8.png'),
(1, 'What is the average body temperature of a dog?', 'images/Dog9.png'),
(1, 'What is the term used to describe a group of pugs?', 'images/Dog10.png');

-- National Flag
INSERT INTO Questions (QuizID, QuestionText, QuestionImageURL) VALUES 
(2, 'Which country is this?', 'images/flag1.png'),
(2, 'Which country is this?', 'images/flag2.png'),
(2, 'Which country is this?', 'images/flag3.png'),
(2, 'Which country is this?', 'images/flag4.png'),
(2, 'Which country is this?', 'images/flag5.png'),
(2, 'Which country is this?', 'images/flag6.png'),
(2, 'Which country is this?', 'images/flag7.png'),
(2, 'Which country is this?', 'images/flag8.png'),
(2, 'Which country is this?', 'images/flag9.png'),
(2, 'Which country is this?', 'images/flag10.png');

-- Japanese
INSERT INTO Questions (QuizID, QuestionText, QuestionImageURL) VALUES 
(3, 'Japan is known as the "Land of the Rising ___."', 'images/Japan1.png'),
(3, 'Mt. Fuji is the highest mountain in Japan.', 'images/Japan2.png'),
(3, 'What is the capital city of Japan?', 'images/Japan3.png'),
(3, 'What is the Japanese word for "hello"?', 'images/Japan4.png'),
(3, 'Korea, China, and Japan are using exactly the same language.', 'images/Japan5.png');

-- Answers
-- Dog Breed Answers
INSERT INTO Answers (QuestionID, AnswerText, IsCorrect) VALUES 
(1, 'Pomeranian', FALSE),
(1, 'Chihuahua', FALSE),
(1, 'Yorkshire Terrier', TRUE),
(1, 'Shih-Tzu', FALSE),
(2, 'Golden Retriever', TRUE),
(2, 'German Shepherd', FALSE),
(2, 'Labrador Retriever', FALSE),
(2, 'Rottweiler', FALSE),
(3, 'Border Collie', FALSE),
(3, 'ShiBa-Inu', TRUE),
(3, 'Siberian Husky', FALSE),
(3, 'Bulldog', FALSE),
(4, 'True', TRUE),
(4, 'False', FALSE),
(5, 'True', FALSE),
(5, 'False', TRUE),
(6, 'True', TRUE),
(6, 'False', FALSE),
(7, 'Pomeranian', FALSE),
(7, 'Chihuahua', TRUE),
(7, 'Yorkshire Terrier', FALSE),
(7, 'Shih-Tzu', FALSE),
(8, 'Golden Retriever', TRUE),
(8, 'German Shepherd', FALSE),
(8, 'Labrador Retriever', FALSE),
(8, 'Rottweiler', FALSE),
(9, 'Border Collie', FALSE),
(9, 'ShiBa-Inu', TRUE),
(9, 'Siberian Husky', FALSE),
(9, 'Bulldog', FALSE),
(10, 'A pack', FALSE),
(10, 'A grumble', TRUE),
(10, 'A gaggle', FALSE),
(10, 'A herd', FALSE);

-- National Flag Answers
INSERT INTO Answers (QuestionID, AnswerText, IsCorrect) VALUES 
(11, 'Japan', TRUE),
(11, 'China', FALSE),
(11, 'Korea', FALSE),
(11, 'Thailand', FALSE),
(12, 'Brazil', FALSE),
(12, 'Germany', FALSE),
(12, 'France', FALSE),
(12, 'Italy', TRUE),
(13, 'Australia', FALSE),
(13, 'Canada', TRUE),
(13, 'United States', FALSE),
(13, 'United Kingdom', FALSE),
(14, 'Spain', FALSE),
(14, 'Mexico', FALSE),
(14, 'India', TRUE),
(14, 'Russia', FALSE),
(15, 'Egypt', FALSE),
(15, 'Argentina', TRUE),
(15, 'South Africa', FALSE),
(15, 'South Korea', FALSE),
(16, 'Indonesia', FALSE),
(16, 'Netherlands', FALSE),
(16, 'Switzerland', TRUE),
(16, 'Sweden', FALSE),
(17, 'Belgium', FALSE),
(17, 'Portugal', TRUE),
(17, 'Greece', FALSE),
(17, 'Norway', FALSE),
(18, 'Denmark', TRUE),
(18, 'Finland', FALSE),
(18, 'Poland', FALSE),
(18, 'Ireland', FALSE),
(19, 'New Zealand', FALSE),
(19, 'Singapore', FALSE),
(19, 'Malaysia', TRUE),
(19, 'Thailand', FALSE),
(20, 'Philippines', FALSE),
(20, 'Vietnam', FALSE),
(20, 'Belgium', TRUE),
(20, 'Austria', FALSE);

-- Japanese Answers
INSERT INTO Answers (QuestionID, AnswerText, IsCorrect) VALUES 
(21, 'Sun', TRUE),
(21, 'Moon', FALSE),
(21, 'Star', FALSE),
(21, 'Sky', FALSE),
(22, 'True', TRUE),
(22, 'False', FALSE),
(23, 'Tokyo', TRUE),
(23, 'Osaka', FALSE),
(23, 'Kyoto', FALSE),
(23, 'Hiroshima', FALSE),
(24, 'Konnichiwa', TRUE),
(24, 'Sayonara', FALSE),
(24, 'Arigato', FALSE),
(24, 'Konnbanwa', FALSE),
(25, 'True', FALSE),
(25, 'False', TRUE);

-- Check Quiz ** Delete here later or make a view for this
-- show QUIZ CONTENT
CREATE OR REPLACE VIEW QuizContent AS
SELECT q.quizID, q.questionID, q.QuestionText, 
    GROUP_CONCAT(COALESCE(a.AnswerText, 'NULL') ORDER BY a.AnswerID) AS Choices, 
    GROUP_CONCAT(COALESCE(a.IsCorrect, 'NULL') ORDER BY a.AnswerID) AS Correctness
FROM Questions q
LEFT JOIN Answers a ON q.QuestionID = a.QuestionID
GROUP BY q.questionID, q.QuestionText;

SELECT * FROM QuizContent;
SELECT * FROM QuizContent WHERE quizID=1;
SELECT * FROM QuizContent WHERE quizID=2;
SELECT * FROM QuizContent WHERE quizID=3;

show databases;