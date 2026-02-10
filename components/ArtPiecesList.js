import ArtPiecePreview from "./ArtPiecePreview";
import styled from "styled-components";

const List = styled.ul`
  display: grid;
  gap: 24px;
`;
const ListItem = styled.li`
  list-style-type: none;
`;

export default function ArtPiecesList({ pieces, isLiked, onToggle }) {
  return (
    <List>
      {pieces.map((piece) => (
        <ListItem key={piece.slug}>
          <ArtPiecePreview
            piece={piece}
            isLiked={isLiked}
            onToggle={onToggle}
          />
        </ListItem>
      ))}
    </List>
  );
}
