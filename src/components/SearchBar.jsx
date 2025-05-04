function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="p-2 w-full">
      <input
        type="text"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded w-full"
      />
    </div>
  );
}

export default SearchBar;
