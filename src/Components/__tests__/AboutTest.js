import { render, screen } from "@testing-library/react";
import About from "../About";
import "@testing-library/jest-dom";

test("should load about us component", () => {
  render(<About />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("should load button inside About component", () => {
  render(<About />);

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("should load input name inside About component", () => {
  render(<About />);

  const inputName = screen.getByPlaceholderText("name");
  expect(inputName).toBeInTheDocument();
});

test("should load 2 input boxes inside About component", () => {
  render(<About />);

  const inputBoxes = screen.getAllByRole("textbox");
  expect(inputBoxes.length).toBe(2);
});
