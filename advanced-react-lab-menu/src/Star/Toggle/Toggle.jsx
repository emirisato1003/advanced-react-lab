import React, { createContext, useState, useId } from 'react';
const ToggleContext = createContext();

export default function Toggle({ children }) {
    const [on, setOn] = useState(false);

    function toggle() {
        setOn(prevOn => !prevOn);
    }

    const menuId = useId()

    return (
        <ToggleContext.Provider value={{toggle, on, menuId}}>
            {children}
        </ToggleContext.Provider>
    );
}

export { ToggleContext };
