import React from "react";
import NoteList from "./NoteList";
import SearchBar from "./SearchBar";

const Sidebar = ({ notes, onSelectNote, searchTerm, setSearchTerm, onSortNotes, sortOrderAsc }) => {

    return (
        <aside className="w-96 overflow-hidden bg-gray-100 dark:bg-dark-surface text-black dark:text-dark-text h-full p-4 border-r border-gray-300 dark:border-dark-border flex flex-col transition-colors duration-500">
            <h2 className="text-xl font-bold mb-4">Notes</h2>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <button
                onClick={onSortNotes}
                className="flex items-center self-center w-3/4 justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 my-2 rounded transition duration-200"
            >
                {sortOrderAsc ? (
                    <>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                        Sort A → Z
                    </>
                ) : (
                    <>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        Sort Z → A
                    </>
                )}
            </button>

            <NoteList notes={notes} onSelectNote={onSelectNote} />
        </aside>

    );
};

export default Sidebar;
