import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './NavBar.jsx';
import MessageContainer from './MessageContainer.jsx';
import Contacts from './Contacts.jsx';
import Profile from './Profile.jsx';

export default function Main() {
  return (
    <Router>
      <main>
        <NavBar />
        <Route path="/messages" component={MessageContainer} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/profile" component={Profile} />
      </main>
    </Router>
  );
}
