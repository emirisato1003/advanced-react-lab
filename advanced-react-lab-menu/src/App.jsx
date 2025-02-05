import React, { useContext } from 'react';
import Menu from "./Menu/index";
import Star from './Star';

function App() {
  const sports = ["Home", "About", "blog", "Contact"];

  return (
    <>
      <Star onChange={() => console.log("onChange")} />
      <hr />
      <br />

      {/* <Menu>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Dropdown>
          {sports.map(sport => (
            <Menu.Item key={sport}>{sport}</Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu> */}
    </>
  );
}

export default App;;