import { render, fireEvent } from './test-utils'
import * as customQueries from './test-utils/custom-queries'
import App from './App'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
