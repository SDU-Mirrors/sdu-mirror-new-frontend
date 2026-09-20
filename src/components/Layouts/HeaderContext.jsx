// HeaderContext.js
import { createContext, useContext, useState } from 'react';

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
    const [extraButton, setExtraButton] = useState(null);

    return (
        <HeaderContext.Provider value={{ extraButton, setExtraButton }}>
            {children}
        </HeaderContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useHeader = () => {
    return useContext(HeaderContext);
};
