import React, { createContext, useEffect, useState } from 'react';

const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches) {
            return 'dark';
        }
    }
    return 'light';
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getInitialTheme);

    const rawSetTheme = (theme) => {
        const root = window.document.documentElement;
        const isDark = theme === 'dark';

        root.setAttribute('data-theme',isDark ? 'dark' : 'light')
        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(theme);
    };

    useEffect(() => {
        rawSetTheme(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
