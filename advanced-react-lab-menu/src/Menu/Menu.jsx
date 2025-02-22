import React, { createContext } from "react";
import Toggle from "../Star/Toggle";
import useToggle from "../hooks/useToggle";

const MenuContext = createContext();

export default function Menu({ children, onOpen }) {
    const [open, toggleOpen] = useToggle(true);
    return (
        <MenuContext.Provider value={{ open, toggleOpen }}>
            <div className="menu" role="menu">
                {children}
            </div>
        </MenuContext.Provider>
    );
}

export { MenuContext };