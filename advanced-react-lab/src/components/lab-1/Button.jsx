import React from "react";
import classNames from "classnames";
export default function Button({ children, size, className, variant, ...rest }) {

    let sizeClass = size && `button-${size}`;
    let variantClass = variant && `button-${variant}`;

    const allClasses = classNames(sizeClass, className, variantClass);

    return (
        <div className="single-button">
            <h2>Button: {size && variant ? `${size} + ${variant}` : 'original'}</h2>
            <button className={allClasses} {...rest}>
                {children}
            </button>
        </div>
    );
}