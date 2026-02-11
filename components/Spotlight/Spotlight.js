import Image from "next/image";
import styled from "styled-components";
import FavouritesButton from "../FavouritesButton/FavouritesButton";
import { useEffect, useState } from "react";

export default function Spotlight({ pieces, artPieceData, onToggle }) {
  const [spotlightPiece, setSpotlight] = useState(pieces[0]);

  useEffect(() => {
    setSpotlight(pieces[Math.floor(Math.random() * pieces.length)]);
  }, [pieces]);

  return (
    <>
      <StyledContainer>
        <StyledImage
          fill={true}
          src={spotlightPiece.imageSource}
          alt={spotlightPiece.name}
        />
      </StyledContainer>
      <p>{spotlightPiece.artist}</p>
      <FavouritesButton
        slug={spotlightPiece.slug}
        artPieceData={artPieceData}
        onToggle={onToggle}
      />
    </>
  );
}
const StyledImage = styled(Image)`
  object-fit: cover;
`;

const StyledContainer = styled.div`
  width: 50vw;
  height: 50vh;
  position: relative;
`;
