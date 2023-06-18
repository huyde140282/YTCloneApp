import React from 'react';
import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from '@testing-library/react';
import ShareVideoForm from './';
import { useHandleShare } from '@/app/share-video/modules/useHandleShare';

// Mock the onShareVideo function
const mockOnShareVideo = jest.fn();

// Mock the isLoading prop
const isLoading = false;
test('renders ShareVideoForm component and submits form', async () => {
  act(() => {
    render(
      <ShareVideoForm onShareVideo={mockOnShareVideo} isLoading={isLoading} />
    );
  });

  // Get the form inputs
  const titleInput = screen.getByLabelText('Title') as HTMLInputElement;
  const videoUrlInput = screen.getByLabelText('VideoUrl') as HTMLInputElement;
  const descriptionInput = screen.getByLabelText(
    'Description'
  ) as HTMLInputElement;
  const submitButton = screen.getByRole('button', { name: 'Share' });

  act(() => {
    // Enter values into the inputs
    fireEvent.change(titleInput, { target: { value: 'Test Video' } });
    fireEvent.change(videoUrlInput, {
      target: { value: 'https://www.youtube.com/watch?v=abcdefgh' },
    });
    fireEvent.change(descriptionInput, {
      target: { value: 'This is a test video' },
    });

    // Submit the form
    fireEvent.click(submitButton);
  });
  // Verify the input value
  expect(titleInput.value).toBe('Test Video');
  expect(videoUrlInput.value).toBe('https://www.youtube.com/watch?v=abcdefgh');
  expect(descriptionInput.value).toBe('This is a test video');
  // Verify that the onShareVideo function was called with the correct values
  await waitFor(() => {
    expect(mockOnShareVideo).toHaveBeenCalled();
  });
});
