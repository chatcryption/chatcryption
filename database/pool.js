const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'chatcryption_db',
  max: 9,
  // user: 'admin',
  // password: 'ilovetesting'
})

const createTables = `CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR,
    email VARCHAR NOT NULL,
    password VARCHAR,
    last_login TIMESTAMP
  )
  CREATE TABLE IF NOT EXISTS messages (
    message_id SERIAL PRIMARY KEY,
    author_id VARCHAR REFERENCES users(user_id),
    recipient_id VARCHAR REFERENCES message_recipients(recipient_id),
    message_body VARCHAR(280),
    time_sent TIMESTAMP
  )
  CREATE TABLE IF NOT EXISTS message_recipients (
    recipient_id SERIAL PRIMARY KEY REFERENCES users(user_id),
    message_id INTEGER REFERENCES messages(message_id),
    is_read BOOLEAN,
  );`

pool.query(createTables, (err, result) => {
  if (err) {
    console.log('error in creating table')
  } else {
    console.log('table successfully created')
  }
});

module.exports = pool;