import React from 'react';
import Menu from "./Menu/Menu";
import MenuButton from "./Menu/MenuButton";
import MenuDropdown from "./Menu/MenuDropdown";

function App() {

  return (
    <Menu>
      <MenuButton>Sports</MenuButton>
      <MenuDropdown items={["Tennis", "Pickleball", "Racquetball", "Squash"]} />
    </Menu>
  );
}

export default App;