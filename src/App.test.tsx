import { render, screen } from "@testing-library/react";
import App from "./App";

test("app renders search page", () => {
  render(<App />);
  const button = screen.getByText("Search");
  expect(button).toBeInTheDocument();
});
