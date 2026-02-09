import useSWR from "swr";
import Image from "next/image";
import styled from "styled-components";

const URL = "https://example-apis.vercel.app/api/art";

async function fetcher(url) {
  const response = await fetch(url);
  return await response.json();
}

export default function Spotlight() {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);
  const randomObject = data[Math.floor(Math.random() * 11)];

  const StyledImage = styled(Image)`
    object-fit: cover;
  `;

  const StyledContainer = styled.div`
    width: 50vw;
    height: 50vh;
    position: relative;
  `;

  return (
    <>
      <StyledContainer>
        <StyledImage
          fill={true}
          src={randomObject.imageSource}
          alt={randomObject.name}
          // width={randomObject.dimensions.width}
          // height={randomObject.dimensions.height}
        />
      </StyledContainer>
      <p>{randomObject.artist}</p>
    </>
  );
}
