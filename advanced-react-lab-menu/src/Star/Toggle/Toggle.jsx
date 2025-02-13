import React, { createContext, useState, useId, useEffect, useRef } from 'react';
import useEffectOnUpdate from '../../hooks/useEffectOnUpdate';
const ToggleContext = createContext();

export default function Toggle({ children, onToggle = () => { } }) {
    const [on, setOn] = useState(false);

    function toggle() {
        setOn(prevOn => !prevOn);
    }

    const menuId = useId();
    useEffectOnUpdate(onToggle,[on]);
    return (
        <ToggleContext.Provider value={{ toggle, on, menuId }}>
            {children}
        </ToggleContext.Provider>
    );
}

export { ToggleContext };
