import React from 'react';
import { ThemeProvider } from '../../context/ThemeContext';
import CharacterList from '../CharacterList/CharacterList';
import Header from '../header/Header';
import './ThemeContainer.css';

const ColorModeContainer = () => {
  return (
    <ThemeProvider>
      <Header />
      <CharacterList />
    </ThemeProvider>
  );
};

export default ColorModeContainer; 
