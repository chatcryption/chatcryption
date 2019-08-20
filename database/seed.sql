-- to add dummy data into the database just for testing purposes

INSERT INTO users
  (username, email, password, last_login)
  VALUES
    (dan, dn@gmail.com, ilovetesting, Date.now()),
    (dillon, dg@gmail.com, ilovetesting, Date.now()),
    (eric, ep@gmail.com, ilovetesting, Date.now()),
    (jake, jk@gmail.com, ilovetesting, Date.now());


INSERT INTO messages
  (author_id, sent_to, message_body, time_sent)
  VALUES
    ((SELECT user_id FROM users WHERE username = 'dan'), (SELECT user_id from users WHERE username = 'dillon'), 'hello there', Date.now()),
    ((SELECT user_id FROM users WHERE username = 'dillon'), (SELECT user_id from users WHERE username = 'dan'), 'how are you?', Date.now()),
    ((SELECT user_id FROM users WHERE username = 'dan'), (SELECT user_id FROM users WHERE username = 'dillon'), 'I am fine', Date.now());


INSERT INTO message_recipients
  (sent_to, message_id, is_read)
  VALUES 
    ((SELECT sent_to FROM messages WHERE message_body = 'hello there'), (SELECT message_id FROM messages WHERE message_body = 'hello there'), true),
    ((SELECT sent_to FROM messages WHERE message_body = 'how are you?'), (SELECT message_id FROM messages WHERE message_body = 'how are you?'), true),
    ((SELECT sent_to FROM messages WHERE message_body = 'I am fine'), (SELECT message_id FROM messages WHERE message_body = 'I am fine'), true);


