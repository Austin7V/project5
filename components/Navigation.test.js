import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      pathname: "/",
    };
  },
}));

test("renders Spotlight link", () => {
  render(<Navigation />);
  const spotlightLink = screen.getByRole("link", { name: /spotlight/i });
  expect(spotlightLink).toBeInTheDocument();
});
test("renders Gallery link", () => {
  render(<Navigation />);
  const galleryLink = screen.getByRole("link", { name: /gallery/i });
  expect(galleryLink).toBeInTheDocument();
});
test("both links are present", () => {
  render(<Navigation />);
  const links = screen.getAllByRole("link");
  expect(links).toHaveLength(2);
});
