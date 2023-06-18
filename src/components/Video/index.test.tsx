import React from "react";
import { render, screen } from "@testing-library/react";
import Video from "./";

const mockVideo = {
  title: "Test Video",
  videoUrl: "https://www.youtube.com/watch?v=abcdefgh",
  sharedBy: "John Doe",
  likes: 10,
  dislikes: 5,
  description: "This is a test video description.",
};

test("renders Video component with video information", () => {
  render(<Video video={mockVideo} />);

  // Verify the rendered video information
  const videoTitle = screen.getByText("Test Video");
  const sharedBy = screen.getByText("John Doe");
  const likesCount = screen.getByText("10");
  const dislikesCount = screen.getByText("5");
  const description = screen.getByText("This is a test video description.");

  expect(videoTitle).toBeInTheDocument();
  expect(sharedBy).toBeInTheDocument();
  expect(likesCount).toBeInTheDocument();
  expect(dislikesCount).toBeInTheDocument();
  expect(description).toBeInTheDocument();
});
