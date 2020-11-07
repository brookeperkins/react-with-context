import React from 'react';
import { render } from '@testing-library/react';
import CharacterItem from './CharacterItem';

describe('<CharacterItem />', () => {

  it('renders single character', () => {
    const { asFragment } = render(<CharacterItem
      name="Arnold"
      imageUrl="arnold.jpg"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
