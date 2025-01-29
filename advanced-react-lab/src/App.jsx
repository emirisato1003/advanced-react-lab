import React from 'react';
import Button from "./Button";
import Avatar from './Avatar';

function App() {
  const src = "./src/assets/bob.jpg";
  return (
    <main>

      <h1>Buttons</h1>
      <div className="button-container">
        <Button>Log in with Google</Button>
        <Button variant="success" size="sm">Log in with Google</Button>
        <Button variant="warning" size="lg">Log in with Google</Button>
        <Button variant="danger" size="lg">Log in with Google</Button>
      </div>

      <h1>Avatars</h1>
      <div className="avatar-container">
        <Avatar src="./src/assets/bob.jpg" alt="Bob Ziroll" />
        <br />
        <Avatar className="blue">BZ</Avatar>
        <br />
        <Avatar className="pink" />
      </div>
    </main>
  );
}

export default App;
