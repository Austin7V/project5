import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ArtPieceDetails({ piece }) {
    const router = useRouter()
  return (
    <div>
      <h1>{piece.name}</h1>
      <Image
        src={piece.imageSource}
        alt={piece.name}
        width={400}
        height={400}
      />
      <p>Artist: {piece.artist}</p>
      <p>Year: {piece.year}</p>
      <p>Genre: {piece.genre}</p>
      <button onClick={() => router.push("/gallery")}>Back</button>
    </div>
  );
}
