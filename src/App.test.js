import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the advice button', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /take more suvichaar/i });
  expect(buttonElement).toBeInTheDocument();
});
