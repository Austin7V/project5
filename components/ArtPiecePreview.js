import styled from "styled-components";
import Link from "next/link";
import FavouritesButton from "./FavouritesButton/FavouritesButton";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    opacity: 0.8;
  }
`;

const Card = styled.article`
  border: 2px solid #444;
  padding: 16px;
  background-color: ${({ $artPieceData }) => ($artPieceData ? "#fff" : "#111")};
  color: ${({ $artPieceData }) => ($artPieceData ? "#111" : "#fff")};
  height: 100%;
`;

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  margin-bottom: 12px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #0b0b0b;
  border: 1px solid #333;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
`;

const Title = styled.h2`
  margin-bottom: 4px;
  font-size: 18px;
`;

const Artist = styled.p`
  margin: 0;
`;

export default function ArtPiecePreview({ piece, artPieceData, onToggle }) {
  return (
    <>
      <StyledLink href={`/art-pieces/${piece.slug}`}>
        <Card
          $artPieceData={
            artPieceData.find((artPiece) => artPiece.slug === piece.slug)
              ?.isLiked
          }
        >
          <ImageWrapper>
            <Image src={piece.imageSource} alt={piece.name} />
          </ImageWrapper>
          <Title>{piece.name}</Title>
          <Artist>{piece.artist}</Artist>
        </Card>
      </StyledLink>
      <FavouritesButton
        slug={piece.slug}
        artPieceData={artPieceData}
        onToggle={onToggle}
      />
    </>
  );
}
