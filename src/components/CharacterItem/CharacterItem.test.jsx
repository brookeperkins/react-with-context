import React from 'react';
import { render } from '@testing-library/react';
import CharacterItem from './CharacterItem';
import { ThemeProvider } from '../../context/ThemeContext';

describe('<CharacterItem />', () => {

  it('renders single character', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <CharacterItem
          name="Arnold"
          imageUrl="arnold.jpg"
        />
      </ThemeProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
