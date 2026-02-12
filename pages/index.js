import Spotlight from "@/components/Spotlight/Spotlight";
import styled from "styled-components";
export default function HomePage({ pieces, artPieceData, onToggle }) {
  return (
    <Page>
      <Title>Spotlight</Title>
      <Spotlight
        pieces={pieces}
        artPieceData={artPieceData}
        onToggle={onToggle}
      />
    </Page>
  );
}
const Title = styled.h1`
  margin-bottom: 12px;
`;
const Page = styled.main`
  background-color: #000;
  min-height: 100vh;
  color: #fff;
  padding: 18px;
`;