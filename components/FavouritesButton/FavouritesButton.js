export default function FavouritesButton({ slug, artPieceData, onToggle }) {
  // console.log(artPieceData.filter((artPiece) => artPiece.slug === slug.slug));

  const isLiked = artPieceData.find(
    (artPiece) => artPiece.slug === slug
  )?.isLiked;
  console.log(isLiked);
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
