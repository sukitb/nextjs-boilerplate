import { render, screen } from "@testing-library/react";
import Page from "./page";

describe("Page", () => {
  it("renders the page", () => {
    render(<Page />);
    expect(screen.getByText("Get started by editing")).toBeInTheDocument();
  });
});
