// will need to come back and parse out the current user
// 4:41 8/20 need to add query for last login
// 7:54 8/20 need to add query for most recent message for each converstation
const SqlQueries = {
  authorizeUser: `SELECT username, password
    FROM
      users
    WHERE username = $1
      AND
        password = $2
  `,
  getUserId: `SELECT user_id
    FROM
      users
    WHERE user_id = $1
  `,
  getAllUsers: `SELECT user_id, username FROM users
    `,
  getCurrentUser: `SELECT * 
    FROM users 
      WHERE user_id = $1
    `,
  getConversation: `SELECT message_body, time_sent, is_read, author_id, sent_to 
    FROM messages 
    INNER JOIN 
      message_recipients 
    ON messages.message_id = message_recipients.message_id
      WHERE author_id = $1
        AND sent_to = $2
        OR author_id = $2
        AND sent_to = $1
    `,
  getLastestMessage: `SELECT * 
    FROM messages
    FULL OUTER JOIN
      message_recipients
    ON
      messages.message_id = message_recipients.message_id
    WHERE
      message_recipients.sent_to = 1
    `,

  postMessage:`INSERT INTO messages
    (sent_to, message_body)
      VALUES ($1, $2)
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


// messages.message_body = latest_messages.message_body AND
//       messages.is_read = latest_messages.is_read AND


// SELECT messages.*, sent_to
//   FROM
//     (SELECT DISTINCT
//       author_id, MAX(message_id) AS message_id
//       FROM 
//         messages
//       GROUP BY
//         author_id) AS latest_message
//   INNER JOIN
//     messages
//   ON
//     messages.message_id = latest_message.message_id AND
//     messages.author_id = latest_message.author_id
//   INNER JOIN
//     message_recipients
//   ON
//     message_recipients.sent_to = latest_message.author_id
//   WHERE
//     latest_message.author_id = 1
//     AND 
//       latest_message.message_id > message_recipients.message_id
//     OR
//       message_recipients.sent_to = 2
//       AND
//         latest_message.message_id < message_recipients.message_id



module.exports = SqlQueries;
