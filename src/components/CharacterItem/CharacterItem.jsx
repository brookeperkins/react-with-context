import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../hooks/themes';


const CharacterItem = ({ name, imageUrl }) => {
  const { theme } = useTheme();

  return <figure className={theme}>
    <img src={imageUrl} alt={name} />
    <figcaption>{name}</figcaption>
  </figure>;
};

CharacterItem.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
};

export default CharacterItem;
