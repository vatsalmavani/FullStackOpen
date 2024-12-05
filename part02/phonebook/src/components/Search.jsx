export default function Search({ searchTerm, handleSearch }) {
  return (
    <label>
      search: <input type="text" value={searchTerm} onChange={handleSearch} />
    </label>
  );
}
