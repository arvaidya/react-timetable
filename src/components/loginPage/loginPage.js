import React from 'react';

export default function LoginPage() {
  return (
    <>
      <div>
        <h2>Login Page</h2>
        <p>Please enter your user name and password below</p>
      </div>

      <div>
        User name: <input id="username" type="text" /> <br /> <br />
        Password: <input id="password" type="password" />
      </div>
    </>
  );
}
