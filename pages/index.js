import Spotlight from "@/components/Spotlight/Spotlight";
export default function HomePage({ pieces, isLiked, onToggle }) {
  return (
    <div>
      <Spotlight pieces={pieces} isLiked={isLiked} onToggle={onToggle} />
    </div>
  );
}
