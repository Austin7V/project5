export default function FavouritesButton({ slug, artPieceData, onToggle }) {
  const isLiked = artPieceData.find(
    (artPiece) => artPiece.slug === slug
  )?.isLiked;
  return (
    <button
      type="button"
      onClick={() => {
        onToggle(slug);
      }}
    >
      {isLiked ? "LIKED" : "NOT LIKED"}
    </button>
  );
}
