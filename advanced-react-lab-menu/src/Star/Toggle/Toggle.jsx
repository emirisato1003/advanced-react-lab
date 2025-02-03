import React, { createContext, useState } from 'react';

const ToggleContext = createContext();

export default function Toggle({ children }) {
    const [on, setOn] = useState(false);

    function toggle() {
        setOn(prevOn => !prevOn);
    }
    return (
        <ToggleContext.Provider value={{toggle, on}}>
            {children}
        </ToggleContext.Provider>
    );
}

export { ToggleContext };
