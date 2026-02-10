import { render, screen } from "@testing-library/react";
import ArtPiecesList from "./ArtPiecesList";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      pathname: "/",
    };
  },
}));

test("renders all art pieces", () => {
  const pieces = [
    {
      slug: "piece-1",
      name: "First Artwork",
      artist: "Artist One",
      imageSource: "https://example.com/image1.jpg",
    },
    {
      slug: "piece-2",
      name: "Second Artwork",
      artist: "Artist Two",
      imageSource: "https://example.com/image2.jpg",
    },
    {
      slug: "piece-3",
      name: "Third Artwork",
      artist: "Artist Three",
      imageSource: "https://example.com/image3.jpg",
    },
  ];
  render(<ArtPiecesList pieces={pieces} />);
  expect(screen.getByText(/first artwork/i)).toBeInTheDocument();
  expect(screen.getByText(/second artwork/i)).toBeInTheDocument();
  expect(screen.getByText(/third artwork/i)).toBeInTheDocument();
});

test("renders correct number of list items", () => {
  const pieces = [
    {
      slug: "piece-1",
      name: "First Artwork",
      artist: "Artist One",
      imageSource: "https://example.com/image1.jpg",
    },
    {
      slug: "piece-2",
      name: "Second Artwork",
      artist: "Artist Two",
      imageSource: "https://example.com/image2.jpg",
    },
  ];
  render(<ArtPiecesList pieces={pieces} />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(2);
});

test("link navigates to correct detail page", () => {
  const pieces = [
    {
      slug: "orange-red-green",
      name: "Orange Red and Green",
      artist: "Steve Johnson",
      imageSource: "https://example.com/image.jpg",
    },
  ];
  render(<ArtPiecesList pieces={pieces} />);
  const link = screen.getByRole("link");
  expect(link).toHaveAttribute("href", "/art-pieces/orange-red-green");
});
