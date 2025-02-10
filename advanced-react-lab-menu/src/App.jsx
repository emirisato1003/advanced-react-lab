import React, { useContext } from 'react';
import Menu from "./Menu/index";
import Star from './Star';
import Decision from './Decision';

function App() {
  const sports = ["Home", "About", "blog", "Contact"];

  return (
    <>
      <Star onChange={() => { }} />
      <hr />
      <br />
      <Menu onOpen={() => console.log("open menu")}>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Dropdown>
          {sports.map(sport => (
            <Menu.Item key={sport}>{sport}</Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu >
      <br />
      <br />

      <hr />
      <br />
      <div>
        <Decision render={(goingOut) => {
          return (
            <h1>Am I going out tonight?? {goingOut ? "Yes!" : "Nope..."}</h1>
          );
        }} />
      </div>
    </>
  );
}

export default App;;