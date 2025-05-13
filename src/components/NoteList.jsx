const NoteList = ({ notes, onSelectNote }) => {
    return (
        <ul>
            {notes.map((note) => (
                <li
                    key={note.id}
                    className="p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 border-b"
                    onClick={() => onSelectNote(note)}
                >
                    <h3 className="font-semibold">
                        {note.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        {note.content.replace(/\n/g, ' ').slice(0, 35)}{note.content.length > 35 ? "..." : ''}
                    </p>
                </li>
            ))
            }
        </ul >
    );
};

export default NoteList;
