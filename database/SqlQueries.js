// will need to come back and parse out the current user
// 4:41 8/20 need to add query for last login
const SqlQueries = {
  getAllUsers: `SELECT user_id, username FROM users
    `,
  getCurrentUser: `SELECT * 
    FROM users 
      WHERE (user_id = $1)
    `,
  getConversation: `SELECT message_body, time_sent, is_read, author_id, recipient_id 
    FROM messages INNER JOIN message_recipients 
      ON (messages.recipient_id = message_recipients.recipient_id) 
        WHERE (author_id = $1)
          AND (recipient_id = $2)
          AND (author_id = $2)
          AND (recipient_id = $1)
    `,
  postMessage:`INSERT INTO messages
    (author_id, recipient_id, message_body, time_sent)
      VALUES ($1, $2, $3, $4)
    `,
  putUsername: `UPDATE users 
    SET username = $2
      WHERE user_id = $1
    `,
  putPassword: `UPDATE users 
  SET password = $2
    WHERE user_id = $1
    `
}

module.exports = SqlQueries;
