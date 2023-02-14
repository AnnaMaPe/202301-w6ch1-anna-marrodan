import { render, screen } from "@testing-library/react";
import { Layout } from "./Layout";

describe("Given a Layout", () => {
  describe("When it is rendered", () => {
    test("Then itshould show the title 'My To-do list'", () => {
      const title = "My To-do list";

      render(<Layout />);

      const expectedResult = screen.getByRole("heading", { name: title });

      expect(expectedResult).toBeInTheDocument();
    });
  });
  test("Then it should show an input with the aria-label 'create a task'", () => {
    const expectedText = "create a task";

    render(<Layout />);

    const ariaLabel = screen.getByLabelText(expectedText);
    expect(ariaLabel).toBeInTheDocument();
  });
});
