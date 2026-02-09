export default function ArtPiecePreview({ piece }) {
  return (
    <div>
      <img
        src={piece.imageSource}
        alt={piece.name}
        width="400"
        style={{ display: "block", marginBottom: 8 }}
      />
      <h2 style={{ margin: 0, fontSize: 18 }}>{piece.name}</h2>
      <p style={{ margin: 0 }}>{piece.artist}</p>
    </div>
  );
}
