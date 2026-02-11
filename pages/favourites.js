import ArtPiecesList from "../components/ArtPiecesList";

export default function FavouritesPage({ pieces, isLiked, onToggle }) {
    const likedArray = pieces.map((piece) => {if(isLiked.includes(piece.slug)){}});
  
    return (
    <ArtPiecesList pieces={likedArray} isLiked={isLiked} onToggle={onToggle} />
  );
}
