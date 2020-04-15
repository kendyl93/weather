import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Weather tracker header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Weather tracker/i);
  expect(linkElement).toBeInTheDocument();
});
