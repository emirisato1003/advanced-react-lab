import React, { useContext } from "react";
import Button from "../Button/Button";
// import { MenuContext } from "./Menu";
import { ToggleContext } from "../Star/Toggle/Toggle";

export default function MenuButton({ children }) {
    const { toggle, on, menuId } = useContext(ToggleContext);
    return (
        <Button
            onClick={toggle}
            aria-expanded={on}
            aria-haspopup="true"
            aria-controls={menuId}>
            {children}
        </Button>
    );
}