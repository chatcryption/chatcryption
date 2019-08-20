import React, { useState, useEffect } from 'react';
import Contact from './Contact.jsx';

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  const allowedState = [
    ['Dan', 1, 'DanTheMan36@gmail.com'],
    ['Dillon', 2, 'DillonTheVillian36@gmail.com'],
    ['Eric', 3, 'ericpham36@gmail.com'],
    ['Jake', 2, 'JakeTheCake36@gmail.com'],
  ];

  useEffect(() => {
    setContacts(allowedState);
  }, []);

  const allContacts = contacts.map(x => <Contact name={x[0]} key={`contact_${x[1]}`} id={x[1]} email={x[2]} />);
  return (
    <div className="wrap">
      <div>
        {allContacts}
      </div>
    </div>
  );
}
