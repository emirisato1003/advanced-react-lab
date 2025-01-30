import React from 'react';
import Menu from "./Menu/Menu";
import MenuButton from "./Menu/MenuButton";
import MenuDropdown from "./Menu/MenuDropdown";

function App() {

  return (
    <Menu>
      <MenuButton>Sports</MenuButton>
      <MenuDropdown>{["Tennis", "Pickleball", "Racquetball", "Squash"]}</MenuDropdown>
    </Menu>
  );
}

export default App;