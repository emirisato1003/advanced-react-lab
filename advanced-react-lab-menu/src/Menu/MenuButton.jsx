import React from "react";
import Button from "../Button/Button";
import Toggle from "../Star/Toggle";


export default function MenuButton({ children }) {

    return (
        <Toggle.Button>
            <Button>{children}</Button>
        </Toggle.Button>
    );
}