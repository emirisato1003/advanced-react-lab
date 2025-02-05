import React from 'react';
import Toggle from './Star/Toggle/index';
import { BsStar, BsStarFill } from "react-icons/bs";

export default function Star() {

    function onToggle() {
        console.log("onToggle function run!");
    }

    return (
        <Toggle onToggle={onToggle}>
            <Toggle.Button>
                <Toggle.On>
                    <BsStarFill className="star filled" />
                </Toggle.On>

                <Toggle.Off>
                    <BsStar className="star " />
                </Toggle.Off>
            </Toggle.Button>
        </Toggle>
    );
}
