import React from "react";
import NoteList from "./NoteList";

const Sidebar = () => {
    const mockNotes = [
        { id: 1, title: "Nota 1", content: "Contenido de la nota 1" },
        { id: 2, title: "Nota 2", content: "Contenido de la nota 2" },
      ];
    
    return (
        <aside className="w-64 bg-gray-100 h-full p-4 border-r">
            <h2 className="text-xl font-bold mb-4">Notes</h2>
            {/* <ul>
                <li className="mb-2">Nota 1</li>
                <li className="mb-2">Nota 2</li>
            </ul> */}

            <NoteList notes={mockNotes}/>
        </aside>
    );
};

export default Sidebar;
