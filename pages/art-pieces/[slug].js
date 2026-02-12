import { useState } from "react";
import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";
import CommentsList from "../../components/CommentsList";
import CommentForm from "../../components/CommentForm";
import styled from "styled-components";

export default function ArtPieceDetailsPage({
  pieces,
  artPieceData,
  onToggle,
  onAddComment,
  getCommentsBySlug,
}) {
  const [commentsText, setCommentsText] = useState("");

  const router = useRouter();
  const { slug } = router.query;

  const piece = pieces.find((piece) => piece.slug === slug);
  if (!piece) return <p>Art not found</p>;

  function handleSubmit(event) {
    event.preventDefault();
    onAddComment(slug, commentsText);
    setCommentsText("");
  }
  const pieceComments = getCommentsBySlug(slug);

  return (
    <Page>
      <Title>Details</Title>
      <ArtPieceDetails
        piece={piece}
        artPieceData={artPieceData}
        onToggle={onToggle}
      />
      <section>
        <h2>Comments</h2>
        <CommentForm
          value={commentsText}
          onChange={(event) => setCommentsText(event.target.value)}
          onSubmit={handleSubmit}
        />
        <p>Comments: {pieceComments.length}</p>

        <CommentsList comments={pieceComments} />
      </section>
    </Page>
  );
}
const Title = styled.h1`
  margin-bottom: 12px;
`;
const Page = styled.main`
  background-color: #000;
  min-height: 100vh;
  color: #fff;
  padding: 18px;
`;