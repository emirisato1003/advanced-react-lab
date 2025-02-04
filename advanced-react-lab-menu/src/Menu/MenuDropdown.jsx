import React from "react";
import Toggle from "../Star/Toggle";

export default function MenuDropdown({ children }) {

    return (
        <Toggle.On>
            <div className="menu-dropdown">
                {children}
            </div>
        </Toggle.On>
    );
}