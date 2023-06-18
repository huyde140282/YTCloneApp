import React from "react";
import { render, screen } from "@testing-library/react";
import LoadingSpinner from "./";

test("renders LoadingSpinner component", () => {
  render(<LoadingSpinner />);

  // Verify the presence of the spinner element
  const spinnerElement = screen.getByTestId("loading-spinner");

  expect(spinnerElement).toBeInTheDocument();

  // Verify the relevant styles
  expect(spinnerElement).toHaveClass("animate-spin");
  expect(spinnerElement).toHaveClass("rounded-full");
  expect(spinnerElement).toHaveClass("h-8");
  expect(spinnerElement).toHaveClass("w-8");
  expect(spinnerElement).toHaveClass("border-t-2");
  expect(spinnerElement).toHaveClass("border-b-2");
  expect(spinnerElement).toHaveClass("border-white");
});
