const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'chatcryption_db',
  max: 9,
  // user: 'admin',
  // password: 'ilovetesting'
});

const createUserTable = `CREATE TABLE IF NOT EXISTS users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR,
  email VARCHAR NOT NULL,
  password VARCHAR,
  last_login TIMESTAMP
)`

const createMessagesTable = `CREATE TABLE IF NOT EXISTS messages (
  message_id SERIAL PRIMARY KEY,
  author_id INTEGER REFERENCES users(user_id),
  message_body VARCHAR(280),
  time_sent TIMESTAMP
)`

const createMessageRecipientsTable = `CREATE TABLE IF NOT EXISTS message_recipients (
  recipient_id SERIAL PRIMARY KEY,
  sent_to INTEGER REFERENCES users(user_id),
  message_id INTEGER REFERENCES messages(message_id),
  is_read BOOLEAN
)`

// trust me, i'm a doctor. Don't look too deeply into the abyss
// pool.query(createUserTable, (err, result) => {
//   pool.query(createMessagesTable, (err, result) => {
//     pool.query(createMessageRecipientsTable, (err, result) => {
//       if (err) {
//         console.log('fuck you')
//       }
//       else {
//         console.log('you did it')
//       }
//     })
//   })
// })


// pool.query(createMessagesTable, (err, result) => {
//   if (err) {
//     console.log('error in creating message table', err);
//   } else {
//     console.log('messages table successfully created');
//   }
// });

// pool.query(createMessageRecipientsTable, (err, result) => {
//   if (err) {
//     console.log('error in creating recipients table', err);
//   } else {
//     console.log('messages recipients table successfully created');
//   }
// });

module.exports = pool;