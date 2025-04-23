const NoteList = ({ notes, onSelect }) => {
    return (
        <ul>
            {notes.map((note) => (
                <li
                    key={note.id}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => onSelect(note)}
                >
                    {note.title}
                </li>
            ))}
        </ul>
    );
};

export default NoteList;
