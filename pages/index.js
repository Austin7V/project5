import Spotlight from "@/components/Spotlight/Spotlight";
export default function HomePage({ pieces, artPieceData, onToggle }) {
  return (
    <div>
      <Spotlight
        pieces={pieces}
        artPieceData={artPieceData}
        onToggle={onToggle}
      />
    </div>
  );
}
