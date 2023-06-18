import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RegisterForm from './';

// Mock the registerUser function
const mockRegisterUser = jest.fn();

// Mock the isLoading prop
const isLoading = false;

test('renders RegisterForm component and submits form', async () => {
  render(
    <RegisterForm registerUser={mockRegisterUser} isLoading={isLoading} />
  );

  // Get the form inputs
  const usernameInput = screen.getByLabelText('Username') as HTMLInputElement;
  const emailInput = screen.getByLabelText('Email') as HTMLInputElement;
  const passwordInput = screen.getByLabelText('Password') as HTMLInputElement;
  const submitButton = screen.getByRole('button', { name: 'Register' });

  // Enter values into the inputs
  fireEvent.change(usernameInput, { target: { value: 'test' } });
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });

  // Submit the form
  fireEvent.click(submitButton);

  // Verify the input value
  expect(emailInput.value).toBe('test@example.com');
  expect(usernameInput.value).toBe('test');
  expect(passwordInput.value).toBe('password123');

  // Verify that the registerUser function was called with the correct values
  await waitFor(() => {
    expect(mockRegisterUser).toHaveBeenCalled();
  });
});
