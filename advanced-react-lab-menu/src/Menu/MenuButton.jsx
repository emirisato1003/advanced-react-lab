import React, { useContext } from "react";
import Button from "../Button/Button";
import Toggle from "../Star/Toggle";
import useToggle from "../hooks/useToggle";
import { MenuContext } from "./Menu";


export default function MenuButton({ children }) {
    const { toggleOpen } = useContext(MenuContext);
    return (
        <Button onClick={toggleOpen}>{children}</Button>
    );
}