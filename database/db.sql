CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR,
  email VARCHAR NOT NULL,
  password VARCHAR,
  last_login TIMESTAMP
);

CREATE TABLE messages (
  message_id SERIAL PRIMARY KEY,
  author_id INTEGER REFERENCES users(user_id),
  message_body VARCHAR(280),
  time_sent TIMESTAMP
);

CREATE TABLE message_recipients (
  recipient_id SERIAL PRIMARY KEY,
  sent_to INTEGER REFERENCES users(user_id),
  message_id INTEGER REFERENCES messages(message_id),
  is_read BOOLEAN
);
