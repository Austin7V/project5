import { useState } from "react";
import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function ArtPieceDetailsPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const piece = pieces.find((piece) => piece.slug === slug);
  if (!piece) return <p>Art not found</p>;

  const [comments, setComments] = useState([]);
  const [commentsText, setCommentsText] = useState("");

  return (
    <>
      <ArtPieceDetails piece={piece} />
      <section>
        <h2>Comments</h2>
        <label>Write comment:</label>
        <input
          id="comment"
          name="comment"
          value={commentsText}
          onChange={(event) => setCommentsText(event.target.value)}
        />
        <p>Comments: {comments.length}</p>
      </section>
    </>
  );
}
