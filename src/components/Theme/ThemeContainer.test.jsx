import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { getCharacters } from '../../services/hey-arnold-api';
import ThemeContainer from './ThemeContainer';

jest.mock('../../services/hey-arnold-api.js');

describe('Theme layer', () => {
  it('changes to dark theme', async() => {
    getCharacters.mockResolvedValue([ 
      {
        'id': '1', 
        'name': 'Arnold',
        'image': 'arnold.jpg'
      }
    ]);

    render(<ThemeContainer />);

    const button = screen.getByTestId('button');
    const charactersList = await screen.findByTestId('character-list');

    fireEvent.click(button);

    return waitFor(() => {
      expect(charactersList).toHaveClass('dark');
    });
  });
}); 
