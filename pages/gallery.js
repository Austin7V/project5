import useSWR from "swr";
import styled from "styled-components";
import ArtPiecesList from "../components/ArtPiecesList";

/* const fetcher = (...args) => fetch(...args).then((response) => response.json());
 */
const Page = styled.main`
  background-color: #000;
  min-height: 100vh;
  color: #fff;
  padding: 18px;
`;

const Title = styled.h1`
  margin-bottom: 12px;
`;

export default function GalleryPage() {
  const urlArt = "https://example-apis.vercel.app/api/art";

  const { data: artPieces, error, isLoading } = useSWR(urlArt);

  if (error) return <Page>404 Not Found</Page>;
  if (isLoading) return <Page>Loading...</Page>;

  return (
    <Page>
      <Title>Gallery</Title>
      <ArtPiecesList pieces={artPieces} />
    </Page>
  );
}
