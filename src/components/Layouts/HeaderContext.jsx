// HeaderContext.js
import React, { createContext, useContext, useState } from 'react';

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
    const [extraButton, setExtraButton] = useState(null);

    return (
        <HeaderContext.Provider value={{ extraButton, setExtraButton }}>
            {children}
        </HeaderContext.Provider>
    );
};

export const useHeader = () => {
    return useContext(HeaderContext);
};
