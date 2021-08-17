import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import { ThemeProvider } from '../../context/ThemeContext';

describe('<Header />', () => {
  it('renders the Header', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
}); 
