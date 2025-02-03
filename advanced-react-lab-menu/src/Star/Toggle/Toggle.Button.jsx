import React, { useContext } from 'react';
import { ToggleContext } from './Toggle';

export default function ToggleButton({ children }) {
    const { toggle } = useContext(ToggleContext);
    console.log(toggle);
    return (
        <div onClick={toggle.toggle}>
            {children}
        </div>
    );
}