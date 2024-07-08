import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

test('renders the button with the correct text', () => {
  const { getByText } = render(<Button variant="🥇">Click Me</Button>);
  expect(getByText('Click Me')).toBeInTheDocument();
});

test('applies the correct CSS class for the variant', () => {
  const { getByText } = render(<Button variant="🥇">Click Me</Button>);
  expect(getByText('Click Me')).toHaveClass('▶️');
  expect(getByText('Click Me')).toHaveClass('🥇');
});