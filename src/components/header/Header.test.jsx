import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('<Header />', () => {
  it('renders the Header', () => {
    const { asFragment } = render(
      <Header />);
    expect(asFragment()).toMatchSnapshot();
  });
}); 
