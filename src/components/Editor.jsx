function Editor({ selectedNote }) {
    if (!selectedNote) {
        return <div className="p-4">Selecciona una nota para comenzar a editar.</div>;
    }

    return (
        <div className="flex-1 p-4">
            <h2 className="text-xl font-bold mb-2">{selectedNote.title}</h2>
            <p>{selectedNote.content}</p>
            {/* Aquí irán campos para editar la nota */}
        </div>
    );
}

export default Editor;
