import { useState, useEffect } from "react";

function Editor({ selectedNote, onUpdateNote }) {

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
    }, [title, content, onUpdateNote, selectedNote]);

    if (!selectedNote) {
        return <div className="p-4">Selecciona una nota para comenzar a editar.</div>;
    }

    return (
        // <div className="flex-1 p-4">
        //     <h2 className="text-xl font-bold mb-2">{selectedNote.title}</h2>
        //     <p>{selectedNote.content}</p>
        //     {/* Aquí irán campos para editar la nota */}
        // </div>

        <div className="p-4 flex flex-col gap-4 w-full">
            <input
                className="text-xl font-semibold p-2 border-b"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Título de la nota"
            />
            <textarea
                className="flex-1 p-2 border rounded h-[300px]"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Escribe tu nota aquí..."
            />
        </div>
    );
}

export default Editor;
