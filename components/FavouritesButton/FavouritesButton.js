export default function FavouritesButton({ id, isLiked, onToggle }) {
  return (
    <button
      type="button"
      onClick={() => {
        onToggle(id);
        console.log(isLiked);
      }}
    >
      {isLiked.includes(id) ? "LIKED" : "NOT LIKED"}
    </button>
  );
}
