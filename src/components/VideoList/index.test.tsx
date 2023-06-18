import React from "react";
import { render, screen } from "@testing-library/react";
import VideoList from "./";

const mockVideos = [
  {
    title: "Video 1",
    videoUrl: "https://www.youtube.com/watch?v=abcdefgh",
    sharedBy: "John Doe",
    likes: 10,
    dislikes: 5,
    description: "Description 1",
  },
  {
    title: "Video 2",
    videoUrl: "https://www.youtube.com/watch?v=ijklmnop",
    sharedBy: "Jane Smith",
    likes: 15,
    dislikes: 2,
    description: "Description 2",
  },
];

test("renders VideoList component with videos", () => {
  render(<VideoList videos={mockVideos} loading={false} />);

  // Verify the rendered video components
  const video1 = screen.getByText("Video 1");
  const video2 = screen.getByText("Video 2");

  expect(video1).toBeInTheDocument();
  expect(video2).toBeInTheDocument();
});

test("renders VideoList component with no videos", () => {
  render(<VideoList videos={[]} loading={false} />);

  // Verify the "No videos available" message
  const noVideosMessage = screen.getByText("No videos available");

  expect(noVideosMessage).toBeInTheDocument();
});

test("renders VideoList component while loading", () => {
  render(<VideoList videos={[]} loading={true} />);

  // Verify the loading spinner
  const loadingSpinner = screen.getByTestId("loading-spinner");

  expect(loadingSpinner).toBeInTheDocument();
});
