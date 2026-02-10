import Image from "next/image";
import styled from "styled-components";
import FavouritesButton from "../FavouritesButton/FavouritesButton";

export default function Spotlight({ pieces, isLiked, onToggle }) {
  const randomObject = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <>
      <StyledContainer>
        <StyledImage
          fill={true}
          src={randomObject.imageSource}
          alt={randomObject.name}
        />
      </StyledContainer>
      <p>{randomObject.artist}</p>
      <FavouritesButton
        id={randomObject.slug}
        isLiked={isLiked}
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
