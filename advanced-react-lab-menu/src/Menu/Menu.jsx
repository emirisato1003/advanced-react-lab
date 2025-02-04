import React from "react";
import Toggle from "../Star/Toggle";

export default function Menu({ children }) {

    return (
        <Toggle>
            <div className="menu" role="menu">
                {children}
            </div>
        </Toggle>
    );
}
