import styled from "styled-components";
import ArtPiecesList from "../components/ArtPiecesList";

const Page = styled.main`
  background-color: #000;
  min-height: 100vh;
  color: #fff;
  padding: 18px;
`;

const Title = styled.h1`
  margin-bottom: 12px;
`;

export default function FavouritesPage({ pieces, artPieceData, onToggle }) {
  const likedArtPieces = artPieceData.filter((piece) => {
    return piece.isLiked === true;
  });
  const likedArray = pieces.filter((piece) => {
    return likedArtPieces.some((artPiece) => artPiece.slug === piece.slug);
  });
  return (
    <Page>
      <Title>Favourites</Title>
      <ArtPiecesList
        pieces={likedArray}
        artPieceData={artPieceData}
        onToggle={onToggle}
      />
    </Page>
  );
}
