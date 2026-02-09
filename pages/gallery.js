import { useEffect, useState } from "react";
import ArtPiecesList from "@/components/ArtPiecesList";

export default function GalleryPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [artPieces, setArtPieces] = useState([]);

  const urlArt = "https://example-apis.vercel.app/api/art";

  useEffect(() => {
    async function fetchArt() {
      console.log("fetch art!");

      const gallery = await fetch(urlArt);
      const galleryData = await gallery.json();

      console.log(galleryData);
      console.log(galleryData[0]);
      setArtPieces(galleryData);

      setIsLoading(false);
    }
    fetchArt();
  }, []);

  return (
    <main
      style={{
        background: "#000",
        minHeight: "100vh",
        color: "#fff",
        padding: 18,
      }}
    >
      <h1>Gallery</h1>
      {isLoading ? (
        <p> Loading...</p>
      ) : (
        <>
          <p>Art Pieces St.: {artPieces.length}</p>
          <ArtPiecesList pieces={artPieces} />
        </>
      )}
    </main>
  );
}
