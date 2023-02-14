import { render, screen } from "@testing-library/react";
import { ToggleStateButton } from "./ToggleStateButton";

describe("Given a component Button", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text '✔️'", () => {
      const expectedText = "✔️";

      render(<ToggleStateButton />);
      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });
  });
});
