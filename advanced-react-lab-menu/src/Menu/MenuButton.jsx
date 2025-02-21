import React from "react";
import Button from "../Button/Button";
import Toggle from "../Star/Toggle";
import useToggle from "../hooks/useToggle";


export default function MenuButton({ children }) {
    const [open, toggleOpen] = useToggle()
    
    return (
        <Button onClick={toggleOpen}>{children}</Button>
    );
}