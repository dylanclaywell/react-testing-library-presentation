import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Accordion from "./Accordion";

test("it renders the accordion", () => {
  render(<Accordion label="Click to expand" />);

  const accordion = screen.getByRole("button", { name: /click to expand/i });

  expect(accordion).toBeInTheDocument();
});

test("it calls onClick when the accordion is clicked", () => {
  const onClick = jest.fn();
  render(<Accordion label="Click to expand" onClick={onClick} />);

  const accordion = screen.getByRole("button", { name: /click to expand/i });
  userEvent.click(accordion);

  expect(onClick).toHaveBeenCalledTimes(1);
});

test("it is expanded when the accordion is clicked", () => {
  render(<Accordion label="Click to expand" />);

  const collapsedAccordion = screen.getByRole("button", {
    name: /click to expand/i,
    expanded: false,
  });

  expect(collapsedAccordion).toBeInTheDocument();

  userEvent.click(collapsedAccordion);

  const expandedAccordion = screen.getByRole("button", {
    name: /click to expand/i,
    expanded: true,
  });

  expect(expandedAccordion).toBeInTheDocument();
});

test("it renders the content when the accordion is expanded", () => {
  const onClick = jest.fn();
  render(
    <Accordion label="Click to expand" onClick={onClick}>
      <span>I am some content.</span>
    </Accordion>
  );

  const accordion = screen.getByRole("button", {
    name: /click to expand/i,
    expanded: false,
  });

  userEvent.click(accordion);

  const content = screen.getByText(/i am some content\./i);

  expect(content).toBeInTheDocument();
});

test("it does not render the content when the accordion is collapsed", () => {
  const onClick = jest.fn();
  render(
    <Accordion label="Click to expand" onClick={onClick}>
      <span>I am some content.</span>
    </Accordion>
  );

  const content = screen.queryByText(/i am some content\./i);

  expect(content).not.toBeInTheDocument();
});
