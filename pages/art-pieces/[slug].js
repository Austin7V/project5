import { useState } from "react";
import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";
import CommentsList from "../../components/CommentsList";
import CommentForm from "../../components/CommentForm";

export default function ArtPieceDetailsPage({ pieces }) {
  const [comments, setComments] = useState([]);
  const [commentsText, setCommentsText] = useState("");

  const router = useRouter();
  const { slug } = router.query;

  const piece = pieces.find((piece) => piece.slug === slug);
  if (!piece) return <p>Art not found</p>;

  function handleSubmit(event) {
    event.preventDefault();
    if (commentsText.trim() === "") return;

    const newComment = {
      text: commentsText.trim(),
      date: new Date().toLocaleString(),
      slug: slug,
    };
    setComments((prevComments) => [...prevComments, newComment]);
    setCommentsText("");
  }
  const pieceComments = comments.filter((comment) => comment.slug === slug);

  return (
    <>
      <ArtPieceDetails piece={piece} />
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
    </>
  );
}
