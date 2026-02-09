import useSWR from "swr";
import styled from "styled-components";
import ArtPiecesList from "../components/ArtPiecesList";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

const Page = styled.main`
  background-color: #000;
  min-height: 100vh;
  color: #fff;
  padding: 18px;
`;

const Title = styled.h1`
  margin-bottom: 12px;
`;

const Status = styled.p`
  margin-bottom: 16px;
`;

export default function GalleryPage() {
  const urlArt = "https://example-apis.vercel.app/api/art";

  const {
    data: artPieces,
    error,
    isLoading,
    isValidating,
  } = useSWR(urlArt, fetcher);

  if (error) return <Page>404 Not Found</Page>;
  if (isLoading) return <Page>Loading...</Page>;

  return (
    <Page>
      <Title>Gallery</Title>

      <Status>
        <span
          role="img"
          aria-label={isValidating ? "Validating" : "Ready"}
        ></span>
      </Status>

      <ArtPiecesList pieces={artPieces} />
    </Page>
  );
}
