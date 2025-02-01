import React, { createContext } from "react";
import MenuButton from "./MenuButton";
import MenuDropdown from "./MenuDropdown";

const MenuContext = createContext();

export default function Menu({ children }) {
    const [open, setOpen] = React.useState(true);

    function toggle() {
        setOpen(prevOpen => !prevOpen);
    }
    return (
        <MenuContext.Provider open='false'>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    );
}

export { MenuContext };