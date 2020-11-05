import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from './Header';

describe('<Header />', () => {
  afterEach(() => cleanup());
  it('renders the Header', () => {
    const { asFragment } = render(
      <Header />);
    expect(asFragment()).toMatchSnapshot();
  });
}); 
