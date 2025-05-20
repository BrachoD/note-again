const NoteList = ({ notes, onSelectNote }) => {
    return (
        <ul>
            {notes.map((note) => (
                <li
                    key={note.id}
                    className="p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 border-b overflow-hidden"
                    onClick={() => onSelectNote(note)}
                >
                    <h3 className="font-semibold truncate whitespace-nowrap overflow-hidden text-ellipsis">
                        {note.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 truncate whitespace-nowrap overflow-hidden text-ellipsis">
                        {note.content.replace(/\n/g, ' ')}
                    </p>
                </li>

            ))}
        </ul>
    );
};


export default NoteList;
