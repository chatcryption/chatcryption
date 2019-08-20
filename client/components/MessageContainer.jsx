import React, { useState } from 'react';

import History from './History.jsx';
import Messages from './Messages.jsx';
import Compose from './Compose.jsx';

export default function MessageContainer() {
  return (
    <div className="grid-container">
      <div className="messages">
        <History />
      </div>
      <div className="current">
        <Messages />
      </div>
      <div className="compose">
        <Compose />
      </div>
    </div>
  );
}
