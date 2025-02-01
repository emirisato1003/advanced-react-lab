import React, { useContext } from "react";
import { ThemeContext } from "./App";

export default function Button() {
    const value = useContext(ThemeContext);

    return (
        <button className={`${value.theme}-theme`}>
            Switch Theme
        </button>
    );
}