
CREATE DATABASE memevideos;

\c memevideos;

CREATE TABLE memevideos (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  video_url VARCHAR(200)
);

INSERT INTO memevideos (name,video_url)
VALUES ('Thug Life Baby','https://www.youtube.com/watch?v=-Liinp9Nnyo')
