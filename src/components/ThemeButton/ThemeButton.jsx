import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeProvider/ThemeProvider.jsx';

import LightModeSVG from "src/assets/svg/sun.svg?react"
import DarkModeSVG from "src/assets/svg/moon.svg?react"

const ToggleButton = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-xl hover:bg-opacity-80 hover:bg-base-200 dark:stroke-gray-200 dark:hover:bg-base-300-dark"
        >
            {theme !== 'dark' ? <LightModeSVG className="w-8 h-8"/> : <DarkModeSVG className="w-8 h-8"/>}
        </button>
    );
};

export default ToggleButton;
