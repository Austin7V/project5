import Image from "next/image";
import styled from "styled-components";
import FavouritesButton from "../FavouritesButton/FavouritesButton";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Spotlight({ pieces, artPieceData, onToggle }) {
  const [spotlightPiece, setSpotlight] = useState(pieces[0]);

  useEffect(() => {
    setSpotlight(pieces[Math.floor(Math.random() * pieces.length)]);
  }, [pieces]);

  return (
    <Container>
      <StyledLink href={`/art-pieces/${spotlightPiece.slug}`}>
        <Card>
          <h2>{spotlightPiece.name}</h2>
          <ImageWrapper>
            <StyledImage
              fill={true}
              src={spotlightPiece.imageSource}
              alt={spotlightPiece.name}
            />
          </ImageWrapper>
          <p>{spotlightPiece.artist}</p>
        </Card>
      </StyledLink>
      <ButtonWrapper>
        <FavouritesButton
          slug={spotlightPiece.slug}
          artPieceData={artPieceData}
          onToggle={onToggle}
        />
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  max-width: 500px;
  margin: 0 auto;
  padding: 16px;
`;
const Card = styled.article`
  padding: 16px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8s;
  }
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    height: 500px;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 24px;
  right: 24px;
  z-index: 10;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    opacity: 0.8;
  }
`;
