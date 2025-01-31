import React, { useContext } from "react";
import { ThemeContext } from "./App";

export default function Header() {
    const value = useContext(ThemeContext);

    return (
        <header className={`${value}-theme`}>
            <h1>{`${value} Theme`}</h1>
        </header>
    );
}