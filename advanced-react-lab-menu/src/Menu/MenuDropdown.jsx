import React, { useContext } from "react";
import Toggle from "../Star/Toggle";
import useToggle from "../hooks/useToggle";
import { MenuContext } from "./Menu";

export default function MenuDropdown({ children }) {

    const { open } = useContext(MenuContext);
    return (
        open && <div className="menu-dropdown">
            {children}
        </div>
    );
}