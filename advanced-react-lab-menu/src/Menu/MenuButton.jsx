import React from "react";
import Button from "../Button/Button";

export default function MenuButton({ children, open, toggle }) {

    return (
        <Button onClick={toggle}>{children}</Button>
    );
}