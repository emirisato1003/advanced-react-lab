import React, { useContext } from 'react';
import Menu from "./Menu/index";
import { BsStar, BsStarFill } from "react-icons/bs";
import Toggle from './Star/Toggle/index';
import MenuButton from './Menu/MenuButton';
import MenuDropdown from './Menu/MenuDropdown';
import MenuItem from './Menu/MenuItem';
function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];

  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Toggle.On>
            <BsStarFill className="star filled" />
          </Toggle.On>

          <Toggle.Off>
            <BsStar className="star " />
          </Toggle.Off>
        </Toggle.Button>
      </Toggle>
      <br />
      <hr />
      <br />

      <Toggle>
        <div className="menu" role="menu">
          <Menu.Button>
            Sports
          </Menu.Button>
          <Menu.Dropdown>
            {sports.map(sport => (
              <Menu.Item key={sport}>{sport}</Menu.Item>
            ))}
          </Menu.Dropdown>
        </div>
      </Toggle>
    </>
  );
}

export default App;;