import React from "react";
import NoteList from "./NoteList";
import SearchBar from "./SearchBar";

const Sidebar = ({ notes, onSelectNote, searchTerm, setSearchTerm, onSortNotes, sortOrderAsc }) => {

    return (
        <aside className="w-96 bg-gray-100 dark:bg-gray-700 text-black dark:text-white h-full p-4 border-r item flex flex-col">
            <h2 className="text-xl font-bold mb-4">Notes</h2>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded my-2 w-auto mx-auto"
                onClick={onSortNotes}
            >
                {sortOrderAsc ? '⬇️ Sort A-Z' : '⬆️ Sort Z-A'}
            </button>
            <NoteList notes={notes} onSelectNote={onSelectNote} />
        </aside>
    );
};

export default Sidebar;
