import React, { useState, useEffect } from 'react';
import Main from './components/Main.jsx';
import Login from './components/Login.jsx';


const App = () => {
  const [loggedIn, setLoggedIn] = useState(1);

  if (loggedIn) {
    return (
      <div>
        <Main />
      </div>
    );
  }
  return (
    <div>
      <Login />
    </div>
  );
};

export default App;
