import { useState, useEffect, useRef } from "react";

function Editor({ selectedNote, onUpdateNote, onDeleteNote }) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const isInitialLoad = useRef(true);

    //This allows to change the note that is being displayed when you click it.
    useEffect(() => {
        if (selectedNote) {
            setTitle(selectedNote.title);
            setContent(selectedNote.content);
            isInitialLoad.current = true;
        }
    }, [selectedNote]);

    //If you edit the inputs this is being called.
    useEffect(() => {
        if (selectedNote && !isInitialLoad.current) {
            const updatedNote = {
                ...selectedNote,
                title,
                content,
                updatedAt: new Date().toISOString(),
            };
            onUpdateNote(updatedNote);
        } else {
            isInitialLoad.current = false;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [title, content]);

    if (!selectedNote) {
        return <div className="p-4 flex flex-col gap-4 w-full items-center">Select a note to start editing.</div>;
    }

    return (

        <div className="p-4 flex flex-col gap-4 w-full items-center">
            <input
                className="text-xl font-semibold p-2 border-b w-full bg-white dark:bg-gray-700 text-black dark:text-white"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Note Title"
            />
            <textarea
                className="flex-1 p-2 border rounded h-[300px] w-full bg-white dark:bg-gray-700 text-black dark:text-white"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your note here..."
            />

            <div className="text-sm text-gray-600 dark:text-gray-100">
                Created: {new Date(selectedNote.createdAt).toLocaleString()}
            </div>
            <div className="text-sm text-gray-60 dark:text-gray-100">
                Last Modified: {selectedNote.updatedAt === selectedNote.createdAt ? 'Never.' : new Date(selectedNote.updatedAt).toLocaleString()}
            </div>
            {selectedNote && (
                <div className="">
                    <button onClick={() => onDeleteNote(selectedNote.id)}
                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mt-4">
                        🗑️ Delete Note
                    </button>
                </div>
            )}

        </div>
    );
}

export default Editor;
