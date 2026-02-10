import Image from "next/image";
import styled from "styled-components";

export default function Spotlight({ pieces }) {
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
