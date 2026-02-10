export default function CommentForm({ value, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="comment">Write comment:</label>
      <input id="comment" name="comment" value={value} onChange={onChange} />
      <button type="submit">Send</button>
    </form>
  );
}
