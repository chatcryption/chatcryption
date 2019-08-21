-- to add dummy data into the database just for testing purposes

INSERT INTO users
  (username, email, password, last_login)
  VALUES
    ('dan', 'dn@gmail.com', 'ilovetesting', NOW()),
    ('dillon', 'dg@gmail.com', 'ilovetesting', NOW()),
    ('eric', 'ep@gmail.com', 'ilovetesting', NOW()),
    ('jake', 'jk@gmail.com', 'ilovetesting', NOW());


INSERT INTO messages
  (author_id, message_body, time_sent)
  VALUES
    ((SELECT user_id FROM users WHERE username = 'dan'), 'hello there', NOW()),
    ((SELECT user_id FROM users WHERE username = 'dillon'), 'how are you?', NOW()),
    ((SELECT user_id FROM users WHERE username = 'dan'), 'hello there', NOW()),
    ((SELECT user_id FROM users WHERE username = 'eric'), 'whats up', NOW()),
    ((SELECT user_id FROM users WHERE username = 'dan'), 'hello there', NOW()),
    ((SELECT user_id FROM users WHERE username = 'jake'), 'my dude', NOW());


INSERT INTO message_recipients
  (sent_to, message_id, is_read)
  VALUES 
    ((SELECT user_id FROM users WHERE user_id = 2), (SELECT message_id FROM messages WHERE message_id = 1), true),
    ((SELECT user_id FROM users WHERE user_id = 1), (SELECT message_id FROM messages WHERE message_id = 2), true),
    ((SELECT user_id FROM users WHERE user_id = 3), (SELECT message_id FROM messages WHERE message_id = 3), true),
    ((SELECT user_id FROM users WHERE user_id = 1), (SELECT message_id FROM messages WHERE message_id = 4), true),
    ((SELECT user_id FROM users WHERE user_id = 4), (SELECT message_id FROM messages WHERE message_id = 5), true),
    ((SELECT user_id FROM users WHERE user_id = 1), (SELECT message_id FROM messages WHERE message_id = 6), true);


