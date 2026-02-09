import { useEffect, useState } from "react";
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
          <div>
            {artPieces.slice().map((piece) => (
              <div key={piece.slug}>
                <img
                  src={piece.imageSource}
                  alt={piece.name}
                  width="400"
                  style={{ display: "block", marginBottom: 8 }}
                />
                <h2 style={{ margin: 0, fontSize: 18 }}>{piece.name}</h2>
                <p style={{ margin: 0 }}>{piece.artist}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  );
}
