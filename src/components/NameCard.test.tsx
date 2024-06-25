import { render, screen } from "@testing-library/react";
import NameCard from "./NameCard";

describe("NameCard", () => {
  test("renders the name card with capitalized first and last name", () => {
    render(<NameCard firstName="john" lastName="doe" />);
    const nameElement = screen.getByText("John Doe");
    expect(nameElement).toBeInTheDocument();
  });

  test("renders the name card with empty first and last name", () => {
    render(<NameCard firstName="" lastName="" />);
    const nameElement = screen.getByText("- -");
    expect(nameElement).toBeInTheDocument();
  });
});
