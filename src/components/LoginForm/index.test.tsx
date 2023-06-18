import React from 'react';
import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from '@testing-library/react';
import LoginForm from './';

test('renders login form component', async () => {
  // Mock loginUser function
  const mockLoginUser = jest.fn();

  // Render the component
  render(<LoginForm loginUser={mockLoginUser} isLoading={false} />);

  // Get the form inputs
  const emailInput = screen.getByLabelText('Email') as HTMLInputElement;
  const passwordInput = screen.getByLabelText('Password') as HTMLInputElement;
  const submitButton = screen.getByRole('button', { name: 'Login' });

  act(() => {
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);
  });

  // Verify the input value
  expect(emailInput.value).toBe('test@example.com');
  expect(passwordInput.value).toBe('password123');

  // Verify the form submission
  await waitFor(() => {
    expect(mockLoginUser).toHaveBeenCalled();
  });
});
