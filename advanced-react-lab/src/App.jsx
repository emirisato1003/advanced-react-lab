import React from 'react';
import Button from "./Button";

function App() {
  return (
    <main>
      <Button>Log in with Google</Button>
      <Button variant="success" size="sm" className="green">Log in with Google</Button>
      <Button variant="warning" size="lg" className="green">Log in with Google</Button>
      <Button variant="danger" size="lg" className="green">Log in with Google</Button>
    </main>
  );
}

export default App;
