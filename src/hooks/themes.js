import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const useTheme = () => {
  const { theme, toggle } = useContext(ThemeContext);
  return { theme, toggle };
};
