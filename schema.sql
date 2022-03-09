CREATE TABLE product (
  product_id INT NOT NULL,
  product_name VARCHAR (255),
  slogan VARCHAR (255),
  description TEXT,
  category VARCHAR (255),
  default_price INT NOT NULL
);


CREATE TABLE IF NOT EXISTS questions (
   id SERIAL,
   product_id INT NOT NULL,
   body VARCHAR (255),
   date_written VARCHAR (255),
   asker_name VARCHAR (255),
   asker_email VARCHAR (255),
   reported INT NOT NULL,
   helpful INT NOT NULL
);

CREATE TABLE IF NOT EXISTS answers (
   id INT NOT NULL,
   question_id INT NOT NULL,
   body VARCHAR (255),
   date_written VARCHAR(255),
   answerer_name VARCHAR(255),
   answerer_email VARCHAR(255),
   reported INT NOT NULL,
   helpful INT NOT NULL
);

CREATE TABLE IF NOT EXISTS photos (
  id INTEGER NOT NULL,
  answer_id INTEGER NOT NULL,
  url VARCHAR(1000) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

