import { render, screen } from '@testing-library/react';
import App from './App';

test('renders records heading', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /records/i })).toBeInTheDocument();
});
