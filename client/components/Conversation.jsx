import React from 'react';

export default function Conversation(props) {
  return (
    <div>
      <a href="#">
        {' '}
        {props.name}
        {' '}
        -
        {' '}
        {props.personKey}
      </a>

    </div>
  );
}
