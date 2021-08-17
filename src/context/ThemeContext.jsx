import React from 'react';
import { useState } from 'react';

export const ThemeContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggle = () => {
    if(theme === 'light') setTheme('dark');
    if(theme === 'dark') setTheme('light');
  };

  const bucket = {
    theme,
    toggle
  };

  return (
    <ThemeContext.Provider value={bucket}>
      {children}
    </ThemeContext.Provider>
  );
}; 
