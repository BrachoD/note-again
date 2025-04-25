import React from "react";
import NoteList from "./NoteList";

const Sidebar = ({ notes, onSelectNote }) => {

    return (
        <aside className="w-64 bg-gray-100 h-full p-4 border-r">
            <h2 className="text-xl font-bold mb-4">Notes</h2>
            <NoteList notes={notes} onSelectNote={onSelectNote}/>
        </aside>
    );
};

export default Sidebar;
