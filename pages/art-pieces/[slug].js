import useSWR from "swr";
import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function ArtPieceDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;

  const URL = "https://example-apis.vercel.app/api/art";
  const { data: pieces, error, isLoading } = useSWR(URL);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const piece = pieces.find((piece) => piece.slug === slug);
  if (!piece) return <p>Art not found</p>;

  return <ArtPieceDetails piece={piece} />;
}
