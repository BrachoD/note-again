import React from "react";
import NoteList from "./NoteList";
import SearchBar from "./SearchBar";

const Sidebar = ({ notes, onSelectNote, searchTerm, setSearchTerm, onSortNotes, sortOrderAsc, isSidebarOpen, setIsSidebarOpen }) => {
    const hasNotes = notes && notes.length > 0;

    return (
        <aside
            className={`
          fixed z-40 top-0 left-0 h-full w-72 flex flex-col bg-gray-100 dark:bg-dark-surface text-black dark:text-white border-r border-gray-300 dark:border-dark-border p-4 transition-all duration-300 ease-in-out
          md:static md:translate-x-0 md:w-96
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        >

            <button
                className="md:hidden text-right w-full mb-2 text-gray-700 dark:text-gray-300"
                onClick={() => setIsSidebarOpen(false)}
            >
                ✕ Close
            </button>

            <h2 className="text-xl font-bold mb-4">Notes</h2>

            {hasNotes ? (<>
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

            </>) : (
                <div className="text-center text-gray-500 dark:text-gray-300 mt-8">
                    Note list is empty, <br />
                    add a note to begin ✍️
                </div>
            )}

        </aside>

    );
};




// const Sidebar = ({ notes, onSelectNote, searchTerm, setSearchTerm, onSortNotes, sortOrderAsc, isSidebarOpen, setIsSidebarOpen }) => {
//     return (
//         <aside
//             className={`
//           fixed z-40 top-0 left-0 h-full w-72 bg-gray-100 dark:bg-dark-surface text-black dark:text-white border-r border-gray-300 dark:border-dark-border p-4 transition-transform duration-300 ease-in-out
//           md:static md:translate-x-0 md:w-96
//           ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
//         `}
//         >
//             {/* Botón de cerrar solo visible en móviles */}
//             <button
//                 className="md:hidden text-right w-full mb-2 text-gray-700 dark:text-gray-300"
//                 onClick={() => setIsSidebarOpen(false)}
//             >
//                 ✕ Close
//             </button>

//             <h2 className="text-xl font-bold mb-4">Notes</h2>

//             {notes && notes.length > 0 ? (
//                 <>
//                     <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
//                     <button
//                         onClick={onSortNotes}
//                         className="flex items-center self-center w-3/4 justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 my-2 rounded transition duration-200"
//                     >
//                         {sortOrderAsc ? "⬇️ Sort A-Z" : "⬆️ Sort Z-A"}
//                     </button>
//                     <NoteList notes={notes} onSelectNote={onSelectNote} />
//                 </>
//             ) : (
//                 <p className="text-sm text-gray-600 dark:text-dark-muted">
//                     No notes yet. Add a note to get started! ✍️
//                 </p>
//             )}
//         </aside>
//     );
// };

export default Sidebar;