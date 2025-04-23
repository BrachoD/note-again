import React from "react";

const Editor = ({ selectedNote }) => {
    return (
        <div className="flex-1 p-4">
            <input
                className="w-full text-2xl font-bold mb-4"
                value={selectedNote?.title || ""}
                readOnly
            />
            <textarea
                className="w-full h-96 border p-2"
                value={selectedNote?.content || ""}
                readOnly
            />
        </div>
    );
};

export default Editor;
