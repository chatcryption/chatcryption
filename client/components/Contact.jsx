import React from 'react';

export default function Contact(props) {
  const { name, id, email } = props;
  return (
    <div>
      {name}
      -
      {id}
      -
      {email}
      -
      <a href="#">{`Message ${name}`}</a>
    </div>
  );
}
