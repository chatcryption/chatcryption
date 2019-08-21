// will need to come back and parse out the current user
// 4:41 8/20 need to add query for last login
// 7:54 8/20 need to add query for most recent message for each converstation
const SqlQueries = {
  getAllUsers: `SELECT user_id, username FROM users
    `,
  getCurrentUser: `SELECT * 
    FROM users 
      WHERE (user_id = $1)
    `,
  getConversation: `SELECT message_body, time_sent, is_read, author_id, sent_to 
    FROM messages 
    INNER JOIN 
      message_recipients 
    ON (messages.message_id = message_recipients.message_id) 
      WHERE (author_id = 1)
        AND (sent_to = 2)
        OR (author_id = 2)
        AND (sent_to = 1)
    `,
  getLastestMessage: `SELECT messages.*
    FROM 
      (SELECT DISTINCT
        author_id, MAX(time_sent) AS time_sent
        FROM 
          messages
        GROUP BY
          author_id) AS latest_messages
    INNER JOIN
      messages
    ON
      messages.time_sent = latest_messages.time_sent AND
      messages.author_id = latest_messages.author_id
    WHERE NOT
      latest_messages.author_id = 2
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


// messages.message_body = latest_messages.message_body AND
//       messages.is_read = latest_messages.is_read AND

module.exports = SqlQueries;
