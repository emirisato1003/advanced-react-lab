import React, { createContext, useState, useId, useEffect } from 'react';
const ToggleContext = createContext();

export default function Toggle({ onToggle, children }) {
    const [on, setOn] = useState(false);


    useEffect(() => {
        onToggle
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
