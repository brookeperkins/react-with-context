/* eslint-disable max-len */
import React from 'react';
import CharacterItem from '../CharacterItem/CharacterItem';
import { useCharacters } from '../../hooks/characters';
import { useTheme } from '../../hooks/themes';
import themes from '../Theme/ThemeContainer.css';
import styles from './CharacterList.css';

const CharacterList = () => {
  const { theme } = useTheme();
  const { loading, characters } = useCharacters();
  if(loading) return <h1>Loading...</h1>;

  const characterElements = characters.map(character => (
    <li key={character.id}>
      <CharacterItem {...character} />
    </li>
  ));

  return (
    <ul data-testid="character-list" className={`${styles.CharacterList} ${theme === 'dark' ? themes.dark : themes.light}`}>
      {characterElements}
    </ul>
  );
};

export default CharacterList; 
