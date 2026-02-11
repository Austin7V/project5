import styled from "styled-components";
import ArtPiecesList from "../components/ArtPiecesList";

const Page = styled.main`
  background-color: #000;
  min-height: 100vh;
  color: #fff;
  padding: 18px;
`;

const Title = styled.h1`
  margin-bottom: 12px;
`;

export default function GalleryPage({ pieces, artPieceData, onToggle }) {
  console.log(pieces);
  return (
    <Page>
      <Title>Gallery</Title>
      <ArtPiecesList
        pieces={pieces}
        artPieceData={artPieceData}
        onToggle={onToggle}
      />
    </Page>
  );
}
