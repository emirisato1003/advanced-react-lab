import React from 'react';
import Menu from "./Menu/index";
import Star from './Star/Star';
import Toggle from './Star/Toggle/index';
function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];

  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Star />
        </Toggle.Button>
        <Toggle.On>The toggle is on</Toggle.On>
        <Toggle.Off>The toggle is off</Toggle.Off>
      </Toggle>
      <br />
      <hr />
      <br />
      <Menu>
        <Menu.Button>Sports</Menu.Button>
        <Menu.Dropdown>
          {sports.map(sport =>
            <Menu.Item key={sport}>{sport}</Menu.Item>
          )}
        </Menu.Dropdown>
      </Menu>
    </>
  );
}

export default App;;