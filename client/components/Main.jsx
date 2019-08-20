import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './NavBar.jsx';
import Messages from './Messages.jsx';
import Contacts from './Contacts.jsx';
import Profile from './Profile.jsx';

export default function Main() {
  return (
    <Router>
      <main>
        <NavBar />
        <Route path="/messages" component={Messages} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/profile" component={Profile} />
      </main>
    </Router>
  );
}
