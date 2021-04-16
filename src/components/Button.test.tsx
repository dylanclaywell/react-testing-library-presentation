import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "./Button";

test("it renders the button", () => {
  render(<Button label="Click me" />);

  const button = screen.getByRole("button", { name: /click me/i });

  expect(button).toBeInTheDocument();
});

test("it calls onClick when the button is clicked", () => {
  const onClick = jest.fn();
  render(<Button label="Click me" onClick={onClick} />);

  const button = screen.getByRole("button", { name: /click me/i });
  userEvent.click(button);

  expect(onClick).toHaveBeenCalledTimes(1);
});
