import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";

test("renders an image", () => {
  const pieces = [
    {
      slug: "piece-1",
      name: "First Artwork",
      artist: "Artist One",
      imageSource: "https://example.com/image1.jpg",
    },
  ];
  render(<Spotlight pieces={pieces} />);
  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
});

test("renders the artist name", () => {
  const pieces = [
    {
      slug: "piece-1",
      name: "First Artwork",
      artist: "Pablo Picasso",
      imageSource: "https://example.com/image1.jpg",
    },
  ];
  render(<Spotlight pieces={pieces} />);
  const artist = screen.getByText(/pablo picasso/i);
  expect(artist).toBeInTheDocument();
});
