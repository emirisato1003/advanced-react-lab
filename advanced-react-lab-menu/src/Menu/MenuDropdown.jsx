import React, { useContext } from "react";
// import { MenuContext } from "./Menu";
import { ToggleContext } from "../Star/Toggle/Toggle";

export default function MenuDropdown({ children }) {
    const { on, menuId } = useContext(ToggleContext);

    return on ? (
        <div className="menu-dropdown" id={menuId}>
            {children}
        </div>
    ) : null;
}