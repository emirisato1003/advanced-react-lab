import React from 'react';
import Menu from "./Menu/index";
// import MenuButton from "./Menu/MenuButton";
// import MenuDropdown from "./Menu/MenuDropdown";
// import MenuItem from './Menu/MenuItem';

function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];

  return (
    <Menu>
      <Menu.Button>Sports</Menu.Button>
      <Menu.Dropdown>
        {sports.map(sport =>
          <Menu.Item key={sport}>{sport}</Menu.Item>
        )}
      </Menu.Dropdown>
    </Menu>
  );
}

export default App;