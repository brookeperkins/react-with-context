/* eslint-disable max-len */
import React from 'react';
import { useTheme } from '../../hooks/themes';
import theme from '../Theme/ThemeContainer.css';

const Header = () => {
  const { toggle } = useTheme();

  return (
    <header className={theme.dark}>
      <button data-testid="button" onClick={toggle}>Toggle Themes</button>
    </header>
  );
};
export default Header; 
