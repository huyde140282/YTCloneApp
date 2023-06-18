import Navbar from '.';
import { render, screen } from '@testing-library/react';

test('renders Navbar component with user email', () => {
  const user = {
    id: '1234567',
    email: 'test@example.com',
    password: '1234567',
  };

  render(<Navbar />);

  // Assert that the user email is rendered
  const userEmailElement = screen.getByText(user.email);
  expect(userEmailElement).toBeInTheDocument();

  // Assert that the Share a movie button is rendered
  const shareMovieButton = screen.getByText('Share a movie');
  expect(shareMovieButton).toBeInTheDocument();

  // Assert that the Logout button is rendered
  const logoutButton = screen.getByText('Logout');
  expect(logoutButton).toBeInTheDocument();
});
