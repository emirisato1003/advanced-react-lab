import React from 'react';
import Toggle from './Star/Toggle/index';
import { BsStar, BsStarFill } from "react-icons/bs";
import useToggle from './hooks/useToggle';

export default function Star({ onChange }) {
    const [on, toggle] = useToggle();
    console.log(toggle);
    return (

        <div onClick={toggle}>
            {on ? <BsStarFill className="star filled" /> : <BsStar className="star " />}
        </div>

        // <Toggle onToggle={onChange}>
        //     <Toggle.Button>
        //         <Toggle.On>
        //             <BsStarFill className="star filled" />
        //         </Toggle.On>

        //         <Toggle.Off>
        //             <BsStar className="star " />
        //         </Toggle.Off>
        //     </Toggle.Button>
        // </Toggle>
    );
}
