import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import Navigation from "@/components/Navigation";
import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";

async function fetcher(url) {
  const response = await fetch(url);
  return await response.json();
}

export default function App({ Component, pageProps }) {
  const URL = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(URL, fetcher);

  const [artPieceData, setArtPieceData] = useLocalStorageState("artPieceData", {
    defaultValue: [],
  });

  function handleLiked(slug) {
    setArtPieceData(
      artPieceData.includes(slug)
        ? artPieceData.map((slugs) => slugs !== slug)
        : [...artPieceData, { slug, isLiked: false }]
    );
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
          isLiked={artPieceData}
          onToggle={handleLiked}
        />
      </SWRConfig>
      <Navigation />
    </>
  );
}
