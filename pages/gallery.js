import { useEffect, useState } from "react";
export default function GalleryPage() {
  const [isLoading, setIsLoading] = useState(true);
  const urlArt = "https://example-apis.vercel.app/api/art";

  useEffect(() => {
    async function fetchArt() {
      console.log("fetch art!");

      const gallery = await fetch(urlArt);
      const galleryData = await gallery.json();

      console.log(galleryData);

      setIsLoading(false);
    }
    fetchArt();
  });

  return (
    <main style={{ background: "#000", minHeight: "100vh", color: "#fff" }}>
      <h1>Gallery</h1>
      {isLoading ? <p> Loading...</p> : <p> Loaded!</p>}
    </main>
  );
}
