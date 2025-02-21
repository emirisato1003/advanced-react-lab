import React from "react";
import Toggle from "../Star/Toggle";
import useToggle from "../hooks/useToggle";

export default function Menu({ children, onOpen }) {
    const [open, toggleOpen] = useToggle();
    return (
        <div className="menu" role="menu">
            {children}
        </div>
    );
}
