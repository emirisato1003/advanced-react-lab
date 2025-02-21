import React, { createContext, useState, useId, useEffect, useRef } from 'react';
import useEffectOnUpdate from '../../hooks/useEffectOnUpdate';
import useToggle from '../../hooks/useToggle';
const ToggleContext = createContext();

export default function Toggle({ children, onToggle = () => { } }) {
    const [on, toggle] = useToggle()
    
    const menuId = useId();
    useEffectOnUpdate(onToggle,[on]);
    return (
        <ToggleContext.Provider value={{ toggle, on, menuId }}>
            {children}
        </ToggleContext.Provider>
    );
}

export { ToggleContext };
