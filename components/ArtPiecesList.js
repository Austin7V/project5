import ArtPiecePreview from "./ArtPiecePreview";
import styled from "styled-components";

const List = styled.ul`
  display: grid;
  gap: 24px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const ListItem = styled.li`
  list-style-type: none;
`;

export default function ArtPiecesList({ pieces }) {
  return (
    <List>
      {pieces.map((piece) => (
        <ListItem key={piece.slug}>
          <ArtPiecePreview piece={piece} />
        </ListItem>
      ))}
    </List>
  );
}
