import { Search, X } from 'lucide-react';

function SearchBar({ searchTerm, setSearchTerm }) {
  const clearSearch = () => setSearchTerm("");

  return (
    <div className="relative w-full p-2">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300 w-4 h-4 transition-colors duration-500" />
      <input
        type="text"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-10 pr-10 p-2 border rounded w-full bg-white dark:bg-gray-600 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-300 transition-colors duration-500"
      />
      {searchTerm && (
        <button
          onClick={clearSearch}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors duration-500"
          aria-label="Clear search"
          title="Clear search"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
