import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPiecesList({ pieces }) {
  return (
    <div>
      {pieces.map((piece) => (
        <div key={piece.slug} style={{ marginBottom: 24 }}>
          <ArtPiecePreview piece={piece} />
        </div>
      ))}
    </div>
  );
}
