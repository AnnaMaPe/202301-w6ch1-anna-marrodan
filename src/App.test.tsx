import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the title 'My To-do list'", () => {
      const title = "My To-do list";

      render(<App />);

      const expectedResult = screen.getByRole("heading", { name: title });

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
