import { render, screen } from "@testing-library/react";
import { Task } from "./Task";

describe("Given a Task component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title 'Water the plants'", () => {
      const expectedTitle = "Water the plants";

      render(<Task />);
      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });
  });
});
