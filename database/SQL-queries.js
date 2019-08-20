// will need to come back and parse out the current user
export const getAllUsers = `SELECT user_id, username FROM users
  `

export const getConversation = `SELECT message_body, time_sent, is_read, author_id, recipient_id 
  FROM messages INNER JOIN message_recipients 
    ON (messages.recipient_id = message_recipients.recipient_id) 
      WHERE (author_id = $1)
        AND (recipient_id = $2)
        AND (author_id = $2)
        AND (recipient_id = $1)
  `
export const postMessage = `INSERT INTO messages
  (author_id, recipient_id, message_body, time_sent)
    VALUES ($1, $2, $3, $4)
  `

export const putUsername = `UPDATE users 
  SET username = $2
    WHERE user_id = $1
  `

export const putPassword = `UPDATE users 
SET password = $2
  WHERE user_id = $1
`
