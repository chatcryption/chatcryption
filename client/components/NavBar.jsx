import React from 'react';

import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <a href="#"> Logo Something</a>

      <ul className="navBarMenu">
        <Link to="/messages"><li>Messages</li></Link>
        <Link to="/contacts"><li>Contacts</li></Link>
      </ul>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}
