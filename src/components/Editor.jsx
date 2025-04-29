import { useState, useEffect } from "react";

function Editor({ selectedNote, onUpdateNote, onDeleteNote }) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    //This allows to change the note that is being displayed when you click it.
    useEffect(() => {
        if (selectedNote) {
            setTitle(selectedNote.title);
            setContent(selectedNote.content);
        }
    }, [selectedNote]);

    //If you edit the inputs this is being called.
    useEffect(() => {
        if (selectedNote) {
            const updatedNote = {
                ...selectedNote,
                title,
                content,
            };
            onUpdateNote(updatedNote);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [title, content]);

    if (!selectedNote) {
        return <div className="p-4 flex flex-col gap-4 w-full items-center">Select a note to start editing.</div>;
    }

    return (

        <div className="p-4 flex flex-col gap-4 w-full items-center">
            <input
                className="text-xl font-semibold p-2 border-b w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Título de la nota"
            />
            <textarea
                className="flex-1 p-2 border rounded h-[300px] w-full"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Escribe tu nota aquí..."
            />
            {/* <button className="w-64 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">
                🗑️ Delete Note
            </button> */}
            {selectedNote && (
                <button onClick={() => onDeleteNote(selectedNote.id)}
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mt-4">
                    🗑️ Delete Note
                </button>
            )}

        </div>
    );
}

export default Editor;
