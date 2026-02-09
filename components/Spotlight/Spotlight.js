import useSWR from "swr";
import Image from "next/image";
import styled from "styled-components";

export default function Spotlight() {
  const URL = "https://example-apis.vercel.app/api/art";

  const { data, error, isLoading } = useSWR(URL);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const randomObject = data[Math.floor(Math.random() * data.length)];

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
