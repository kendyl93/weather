import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './index';

test('renders Weather tracker header', () => {
  const { getByText } = render(<Dashboard />);
  const linkElement = getByText(/Weather tracker/i);
  expect(linkElement).toBeInTheDocument();
});
