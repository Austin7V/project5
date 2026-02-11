import { render, screen } from "@testing-library/react";
import ArtPieceDetails from "./ArtPieceDetails";

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
  render(<ArtPieceDetails piece={piece} />);
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
  render(<ArtPieceDetails piece={piece} />);
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
  render(<ArtPieceDetails piece={piece} />);
  const artist = screen.getByText(/pablo picasso/i);
  expect(artist).toBeInTheDocument();
});
test("renders the year", () => {
  const piece = {
    slug: "test slug",
    name: "Test Artwork",
    artist: "Pablo Picasso",
    year: "2018",
    imageSource: "https://example.com/image.jpg",
  };
  render(<ArtPieceDetails piece={piece} />);
  const year = screen.getByText(/2018/i);
  expect(year).toBeInTheDocument();
});
test("renders the genre", () => {
  const piece = {
    slug: "test slug",
    name: "Test Artwork",
    artist: "Pablo Picasso",
    genre: "Abstract Painting",
    imageSource: "https://example.com/image.jpg",
  };
  render(<ArtPieceDetails piece={piece} />);
  const genre = screen.getByText(/Abstract Painting/i);
  expect(genre).toBeInTheDocument();
});
test("renders back button", () => {
  const piece = {
    slug: "orange-red-green",
    name: "Test Artwork",
    artist: "Test Artist",
    imageSource: "https://example.com/image.jpg",
  };
  render(<ArtPieceDetails piece={piece} />);
  const button = screen.getByRole("button", { name: /back/i });
  expect(button).toBeInTheDocument();
});
