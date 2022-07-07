export function Form({ onFormSubmit }) {
  return (
    <form onSubmit={onFormSubmit}>
      <label>
        <input type="text" />
        <button type="submit">search</button>
      </label>
    </form>
  );
}
