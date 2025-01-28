import React from 'react';
import Button from "./Button";
import Avatar from './Avatar';

function App() {
  return (
    <main>

      <h1>Buttons</h1>
      <div className="button-container">
        <Button>Log in with Google</Button>
        <Button variant="success" size="sm" className="green">Log in with Google</Button>
        <Button variant="warning" size="lg" className="green">Log in with Google</Button>
        <Button variant="danger" size="lg" className="green">Log in with Google</Button>
      </div>

      <h1>Avatars</h1>
      <div className="avatar-container">
        <Avatar />
      </div>
    </main>
  );
}

export default App;
