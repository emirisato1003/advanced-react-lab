import React from "react";
import classNames from "classnames";
export default function Button({ children, size, className, variant, ...rest }) {

    let sizeClass = size ? `button-${size}` : ""

    const allClasses = classNames(sizeClass, className, variant);

    return (
        <button className={allClasses} {...rest}>
            {children}
        </button>
    );
}