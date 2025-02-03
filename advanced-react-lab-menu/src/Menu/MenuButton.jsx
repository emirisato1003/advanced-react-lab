import React, { useContext } from "react";
import Button from "../Button/Button";

export default function MenuButton({ children }) {

    return (
        <Button>{children}</Button>
    );
}