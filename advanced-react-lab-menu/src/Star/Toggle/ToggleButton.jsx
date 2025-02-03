import React, { useContext } from 'react';
import { ToggleContext } from './Toggle';
import Button from '../../Button/Button';

export default function ToggleButton({ children }) {
    const { toggle } = useContext(ToggleContext);
    return (
        <div onClick={toggle}>
            {children}
        </div>
        // <Button onClick={toggle}>{children}</Button>
    );
}