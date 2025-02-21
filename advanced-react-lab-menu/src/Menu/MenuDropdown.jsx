import React from "react";
import Toggle from "../Star/Toggle";
import useToggle from "../hooks/useToggle";

export default function MenuDropdown({ children }) {
    const [open, toggleOpen] = useToggle();
    console.log(open);
    return (
        open && <div className="menu-dropdown">
            {children}
        </div>
    );
}