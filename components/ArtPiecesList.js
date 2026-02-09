import ArtPiecePreview from "./ArtPiecePreview";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  gap: 24px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default function ArtPiecesList({ pieces }) {
  return (
    <Grid>
      {pieces.map((piece) => (
        <ArtPiecePreview key={piece.slug} piece={piece} />
      ))}
    </Grid>
  );
}
