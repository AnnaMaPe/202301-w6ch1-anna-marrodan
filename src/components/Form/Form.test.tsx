import { render, screen } from "@testing-library/react";
import { Form } from "./Form";

describe("Given a Form component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Create a task!'", () => {
      const expectedTest = "Create a task!";

      render(<Form />);
      const button = screen.getByRole("button", { name: expectedTest });

      expect(button).toBeInTheDocument();
    });
  });

  test("Then it should show an input with the aria-label 'create a task'", () => {
    const expectedText = "create a task";

    render(<Form />);
    const ariaLabel = screen.getByLabelText(expectedText);

    expect(ariaLabel).toBeInTheDocument();
  });
});
