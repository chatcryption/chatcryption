import React, { useState, useEffect } from 'react';

import Conversation from './Conversation.jsx';

export default function History() {
  const [conversations, setConversations] = useState([]);

  const allowedState = [
    ['Dan', 1, 'DanTheMan36@gmail.com'],
    ['Dillon', 2, 'DillonTheVillian36@gmail.com'],
    ['Eric', 3, 'ericpham36@gmail.com'],
    ['Jake', 4, 'JakeTheCake36@gmail.com'],
  ];

  useEffect(() => {
    setConversations(allowedState);
  }, []);


  const allConversations = conversations.map(x => <Conversation name={x[0]} personKey={x[1]} />);
  return (
    <div>
      {allConversations}
    </div>
  );
}
