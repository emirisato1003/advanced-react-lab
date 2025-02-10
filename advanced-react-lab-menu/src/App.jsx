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
        <Decision sayName={function(bool) {console.log(bool);}}/>
      </div>
    </>
  );
}

export default App;;