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