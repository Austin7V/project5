import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

const Card = styled.article`
  border: 2px solid #444;
  padding: 16px;
  background-color: #111;
  height: 100%;
  color: #fff;
  max-width: 800px;
  margin: 0 auto;
`;
const ImageWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: #0b0b0b;
  border: 1px solid #333;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledImage = styled(Image)`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
`;

const Title = styled.h1`
  margin-bottom: 4px;
  font-size: 18px;
`;

const Artist = styled.p`
  margin: 0;
`;

export default function ArtPieceDetails({ piece }) {
  const router = useRouter();
  return (
    <Card>
      <Title>{piece.name}</Title>
      <ImageWrapper>
        <StyledImage
          src={piece.imageSource}
          alt={piece.name}
          width={400}
          height={400}
        />
      </ImageWrapper>
      <Artist>Artist: {piece.artist}</Artist>
      <p>Year: {piece.year}</p>
      <p>Genre: {piece.genre}</p>
      <button onClick={() => router.push("/gallery")}>← Back to Gallery</button>
    </Card>
  );
}
