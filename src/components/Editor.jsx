import { useState, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";


function Editor({ selectedNote, onUpdateNote, onDeleteNote, onContentChange }) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const isInitialLoad = useRef(true);

    //This allows to change the note that is being displayed when you click it.
    useEffect(() => {
        if (selectedNote) {
            setTitle(selectedNote.title);
            setContent(selectedNote.content);
            onContentChange(selectedNote.content)
            isInitialLoad.current = true;
        }
    }, [selectedNote, onContentChange]);

    //If you edit the inputs this is being called.
    useEffect(() => {


        if (selectedNote && !isInitialLoad.current) {
            const trimmedTitle = title.trim();
            const trimmedContent = content.trim();

            if (!trimmedTitle && !trimmedContent) {
                toast.error("Cannot save an empty note.");
                return;
            }

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
        return <div className="p-4 flex flex-1 flex-col gap-4 w-full h-full items-center justify-center text-gray-500 dark:text-dark-muted">Select a note to start editing.</div>;
    }

    return (

        <div className="flex-1 p-4 flex flex-col items-center gap-4 overflow-y-auto h-full transition-colors duration-500 bg-white dark:bg-gray-900">
            <input
                className="text-xl font-semibold p-2 border-b w-full transition-colors duration-500 dark:bg-dark-surface dark:border-dark-border dark:text-dark-text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Note Title"
            />
            <textarea
                className="flex-1 p-2 border rounded h-[300px] w-full transition-colors duration-500 dark:bg-dark-surface dark:border-dark-border dark:text-dark-text"
                value={content}
                onChange={(e) => {
                    setContent(e.target.value);
                    onContentChange(e.target.value);
                }}
                placeholder="Write your note here..."
            />

            <div className="text-sm text-gray-600 dark:text-dark-muted">
                Created: {new Date(selectedNote.createdAt).toLocaleString()}
            </div>
            <div className="text-sm text-gray-600 dark:text-dark-muted">
                Last Modified: {selectedNote.updatedAt === selectedNote.createdAt ? 'Never.' : new Date(selectedNote.updatedAt).toLocaleString()}
            </div>
            {selectedNote && (
                <div className="">
                    <button
                        onClick={() => onDeleteNote(selectedNote.id)}
                        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white font-semibold py-2 px-4 rounded shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 dark:focus:ring-red-400"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m2 0H7m4-3h2a1 1 0 011 1v1H8V5a1 1 0 011-1z" />
                        </svg>
                        Delete
                    </button>


                </div>
            )}

        </div>
    );
}

export default Editor;
