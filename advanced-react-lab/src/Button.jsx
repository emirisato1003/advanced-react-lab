import React from "react";

export default function Button({ children, size, ...rest }) {
    let sizeClass;
    if (size === "sm") sizeClass = "button-small";
    if (size === "lg") sizeClass = "button-large";

    return (
        <button className={sizeClass} {...rest}>
            {children}
        </button>
    );
}