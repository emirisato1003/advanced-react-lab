import React from "react";
import classNames from "classnames";
export default function Button({ children, size, className, ...rest }) {

    // const sizeClass = size ? size : "";
    let sizeClass = size ? `button-${size}` : ""
    // if (size === "sm") sizeClass = "button-small";
    // if (size === "lg") sizeClass = "button-large";

    const allClasses = classNames(sizeClass, className);

    return (
        <button className={allClasses} {...rest}>
            {children}
        </button>
    );
}