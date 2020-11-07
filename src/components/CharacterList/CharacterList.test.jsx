import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterList from './CharacterList';
import { getCharacters } from '../../services/hey-arnold-api';

jest.mock('../../services/hey-arnold-api.js');

describe('<CharacterList />', () => {
  it('displays a list of characters', async() => {
    getCharacters.mockResolvedValue([
      { id: 1, name: 'Arnold', imageUrl: 'arnold.png' }
    ]);

    render(
      <CharacterList />
    );

    screen.getByText('Loading...');

    const characterList = await screen.findByTestId('character-list');

    return waitFor(() => {
      expect(characterList).not.toBeEmptyDOMElement();
    });
  });
}); 
