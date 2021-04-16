import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the app", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /click/i });
  const accordion = screen.getByRole("button", { name: /expand 1/i });
  const accordionStyled = screen.getByRole("button", { name: /expand 2/i });

  expect(button).toBeInTheDocument();
  expect(accordion).toBeInTheDocument();
  expect(accordionStyled).toBeInTheDocument();
});
