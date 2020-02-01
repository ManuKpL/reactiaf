import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

test('renders react logo', () => {
  const { getByTestId } = render(<App />);
  const logo = getByTestId('app-logo');
  expect(logo).toBeInTheDocument();
});
