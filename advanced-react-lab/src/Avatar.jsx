import { IoPersonSharp } from "react-icons/io5";
import clsx from "clsx";
import React from "react";

export default function Avatar({ src, alt, children, className }) {
    const avatarClasses = clsx('avatar', children && 'avatar-letters', !src && className);
    if (src) {
        return <div className={avatarClasses}>
            <img src={src} alt={alt} />
        </div>;
    }
    if (children) {
        return <div className={avatarClasses}>
            {children}
        </div>;
    } else {
        return <div className={avatarClasses}>
            <IoPersonSharp />
        </div>;
    }
}