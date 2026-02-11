import ArtPiecePreview from "./ArtPiecePreview";
import styled from "styled-components";

const List = styled.ul`
  display: grid;
  gap: 24px;
`;
const ListItem = styled.li`
  list-style-type: none;
`;

export default function ArtPiecesList({ pieces, artPieceData, onToggle }) {
  return (
    <List>
      {pieces.map((piece) => (
        <ListItem key={piece.slug}>
          <ArtPiecePreview
            piece={piece}
            artPieceData={artPieceData}
            onToggle={onToggle}
          />
        </ListItem>
      ))}
    </List>
  );
}
