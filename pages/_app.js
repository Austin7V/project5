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
    defaultValue: [{ slug: "orange-red-and-green", isLiked: false }],
  });

  const [comments, setComments] = useLocalStorageState("comments", {
    defaultValue: [],
  });

  function handleLiked(slug) {
    if (artPieceData.some((artPiece) => artPiece.slug === slug)) {
      setArtPieceData(
        artPieceData.map((artPiece) => {
          if (artPiece.slug === slug) {
            return { slug: artPiece.slug, isLiked: !artPiece.isLiked };
          } else {
            return artPiece;
          }
        })
      );
    } else {
      setArtPieceData([...artPieceData, { slug: slug, isLiked: true }]);
    }
  }

  function handleAddComment(slug, commentText) {
    if (commentText.trim() === "") return;

    const newComment = {
      text: commentText.trim(),
      date: new Date().toLocaleString(),
      slug: slug,
    };
    setComments([...comments, newComment]);
  }

  function getCommentsBySlug(slug) {
    return comments.filter((comment) => comment.slug === slug);
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
          comments={comments}
          onAddComment={handleAddComment}
          getCommentsBySlug={getCommentsBySlug}
        />
      </SWRConfig>
      <Navigation />
    </>
  );
}
