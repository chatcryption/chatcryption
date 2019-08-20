import React, { useState, useEffect } from 'react';

import Message from './Message.jsx';

export default function Messages() {
  const [allMessages, setAllMessages] = useState([]);


  const allowedState = [
    [1, 'WOoohoooo!!! '],
    [2, 'This is totally an awesome message!'],
    [3, 'YIIIIR!'],
    [4, 'Aaaawesome!'],
  ];

  useEffect(() => {
    setAllMessages(allowedState);
  }, []);

  const messageRender = allMessages.map(x => <Message key={`message_${x[0]}`} message={x[1]} />);

  return (
    <div>
      {messageRender}
    </div>
  );
}
