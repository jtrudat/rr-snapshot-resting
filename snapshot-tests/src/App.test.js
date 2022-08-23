import { render, screen } from '@testing-library/react'
import App from './App'


test('renders text jtrudat', () => {
  render(<App />)
  const nameElement = screen.getByText(/jtrudat/i)
  expect(nameElement).toBeInTheDocument()
});