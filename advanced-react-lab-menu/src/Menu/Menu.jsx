import React, { createContext, useId } from "react";

export default function Menu({ children }) {

    return (
        <div className="menu" role="menu">
            {children}
        </div>
    );
}
