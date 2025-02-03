import React, { useContext, useState } from 'react';
import { BsStar, BsStarFill } from "react-icons/bs";
import { ToggleContext } from './Toggle/Toggle';

export default function Star() {
    const value = useContext(ToggleContext);
    return (
        value.on ?
            <BsStarFill className="star filled" onClick={value.toggle} /> :
            <BsStar className="star " onClick={value.toggle} />
    );
}