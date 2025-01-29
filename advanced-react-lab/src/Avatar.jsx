import { IoPersonSharp } from "react-icons/io5";
import classNames from "classnames";
import React from "react";

export default function Avatar(props) {

    return (
        <>
            {/* <h2>Avatar component here!</h2> */}
            {props.src && <div className="avatar">
                <img src={props.src} alt={props.alt} />
            </div>}
            {props.children && <div className="avatar avatar-letters">
                {props.children}
            </div>}
            <div className="avatar avatar-icon">
                <IoPersonSharp />
            </div>
        </>
    );
}