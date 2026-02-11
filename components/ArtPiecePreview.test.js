import { render, screen } from "@testing-library/react";
import ArtPiecePreview from "./ArtPiecePreview";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      pathname: "/",
    };
  },
}));

test("renders the art piece image", () => {
  const piece = {
    slug: "test slug",
    name: "Test Artwork",
    artist: "Test Artist",
    imageSource: "https://example.com/image.jpg",
  };
  render(<ArtPiecePreview piece={piece} />);
  const image = screen.getByRole("img", { name: /test artwork/i });
  expect(image).toBeInTheDocument();
});
test("renders the art piece name", () => {
  const piece = {
    slug: "test slug",
    name: "Orange Red and Green",
    artist: "Steve Johnsen",
    imageSource: "https://example.com/image.jpg",
  };
  render(<ArtPiecePreview piece={piece} />);
  const title = screen.getByText(/orange red and green/i);
  expect(title).toBeInTheDocument();
});
test("renders the artist name", () => {
  const piece = {
    slug: "test slug",
    name: "Test Artwork",
    artist: "Pablo Picasso",
    imageSource: "https://example.com/image.jpg",
  };
  render(<ArtPiecePreview piece={piece} />);
  const artist = screen.getByText(/pablo picasso/i);
  expect(artist).toBeInTheDocument();
});
test("link navigates to correct detail page", () => {
  const piece = {
    slug: "orange-red-green",
    name: "Test Artwork",
    artist: "Test Artist",
    imageSource: "https://example.com/image.jpg",
  };
  render(<ArtPiecePreview piece={piece} />);
  const link = screen.getByRole("link");
  expect(link).toHaveAttribute("href", "/art-pieces/orange-red-green");
});
