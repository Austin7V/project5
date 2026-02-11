import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import Navigation from "@/components/Navigation";
import useSWR from "swr";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

async function fetcher(url) {
  const response = await fetch(url);
  return await response.json();
}

export default function App({ Component, pageProps }) {
  const URL = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(URL, fetcher);

  const [artPieceData, setArtPieceData] = useState([
    { slug: "orange-red-and-green", isLiked: true },
  ]);

  function handleLiked(slug) {
    if (artPieceData.some((artPiece) => artPiece.slug === slug)) {
      setArtPieceData(
        artPieceData.map((artPiece) => {
          if (artPiece.slug === slug) {
            return { slug: artPiece.slug, isLiked: !artPiece.isLiked };
          } else {
            return { slug: artPiece.slug, isLiked: artPiece.isLiked };
          }
        })
      );
    } else {
      setArtPieceData([...artPieceData, { slug: slug, isLiked: true }]);
    }
  }

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Component
          {...pageProps}
          pieces={data}
          artPieceData={artPieceData}
          onToggle={handleLiked}
        />
      </SWRConfig>
      <Navigation />
    </>
  );
}
