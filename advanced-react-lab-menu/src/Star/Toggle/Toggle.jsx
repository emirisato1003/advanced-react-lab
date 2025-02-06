import React, { createContext, useState, useId, useEffect, useRef } from 'react';
const ToggleContext = createContext();

export default function Toggle({ onToggle, children }) {
    const [on, setOn] = useState(false);
    const firstRender = useRef(true);


    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
        } else {
            onToggle();
        }
    }, [on]);


    function toggle() {
        setOn(prevOn => !prevOn);
    }

    const menuId = useId();

    return (
        <ToggleContext.Provider value={{ toggle, on, menuId }}>
            {children}
        </ToggleContext.Provider>
    );
}

export { ToggleContext };
