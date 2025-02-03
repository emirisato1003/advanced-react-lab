import React, { useContext } from 'react';
import Menu from "./Menu/index";
import { BsStar, BsStarFill } from "react-icons/bs";
import Toggle from './Star/Toggle/index';

function App() {
  const sports = ["Home", "About", "blog", "Contact"];

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
        <Menu>
          <Toggle.Button>
            <Menu.Button>Menu</Menu.Button>
          </Toggle.Button>
          <Toggle.On>
            <Menu.Dropdown>
              {sports.map(sport => (
                <Menu.Item key={sport}>{sport}</Menu.Item>
              ))}
            </Menu.Dropdown>
          </Toggle.On>
        </Menu>
      </Toggle>
    </>
  );
}

export default App;;