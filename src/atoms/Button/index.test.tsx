import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from ".";

test("renders button with correct name", () => {
  const name = "Submit";
  render(<Button name={name} />);
  const buttonElement = screen.getByText(name);
  expect(buttonElement).toBeInTheDocument();
});
