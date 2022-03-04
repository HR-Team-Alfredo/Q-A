CREATE TABLE [IF NOT EXISTS] products (
   product_id INT NOT NULL,
   product_name VARCHAR (255)
);


CREATE TABLE [IF NOT EXISTS] questions (
   question_id INT NOT NULL,
   body VARCHAR (255),
   date_written VARCHAR (255),
   asker_name VARCHAR (255),
   asker_email VARCHAR (255),
   reported INT NOT NULL,
   helpful INT NOT NULL,
);

CREATE TABLE [IF NOT EXISTS] answers (
   asker_id INT NOT NULL,
   body VARCHAR (255),
   date_written VARCHAR(255),
   answerer_name VARCHAR(255),
   answerer_email VARCHAR(255),
   reported INT NOT NULL,
   helpful INT NOT NULL,
);

