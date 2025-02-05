import React from "react";
import Toggle from "../Star/Toggle";

export default function Menu({ children, onOpen }) {

    return (
        <Toggle onToggle={onOpen}>
            <div className="menu" role="menu">
                {children}
            </div>
        </Toggle>
    );
}
