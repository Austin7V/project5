import useSWR from "swr";
import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function ArtPieceDetailsPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const piece = pieces.find((piece) => piece.slug === slug);
  if (!piece) return <p>Art not found</p>;

  return <ArtPieceDetails piece={piece} />;
}
