import React, { createContext, useId } from "react";
import MenuButton from "./MenuButton";
import MenuDropdown from "./MenuDropdown";

const MenuContext = createContext();

export default function Menu({ children }) {
    const [open, setOpen] = React.useState(true);

    const menuId = useId()

    function toggle() {
        setOpen(prevOpen => !prevOpen);
    }
    return (
        <MenuContext.Provider value={{open, toggle, menuId}}>
            <div className="menu" role="menu">
                {children} 
            </div>
        </MenuContext.Provider>
    );
}

export { MenuContext };