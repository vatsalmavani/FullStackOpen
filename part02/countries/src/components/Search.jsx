export default function Search({ setSearchTerm }) {
  return (
    <form>
      Find a country:{" "}
      <input
        type="text"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </form>
  );
}
