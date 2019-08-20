import React from 'react';

export default function Profile() {
  return (
    <div className="wrap">

      <div className="profile">
        <h1>Profile Page</h1>
        <input type="text" placeholder="username" />
        <br />
        <input type="text" placeholder="email" />
        <br />
        <h3>Change Password </h3>
        <input type="password" placeholder="Password" />
        <br />
        <input type="password" placeholder="Confirm Password" />
        <br />
        <br />
        <button type="submit">Confirm Changes</button>
      </div>
    </div>
  );
}
