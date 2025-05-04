import React from "react";
import NoteList from "./NoteList";
import SearchBar from "./SearchBar";

const Sidebar = ({ notes, onSelectNote, searchTerm, setSearchTerm }) => {

    return (
        <aside className="w-96 bg-gray-100 h-full p-4 border-r">
            <h2 className="text-xl font-bold mb-4">Notes</h2>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <NoteList notes={notes} onSelectNote={onSelectNote} />
        </aside>
    );
};

export default Sidebar;
