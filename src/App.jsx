import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import Swal from 'sweetalert2';

function App() {
  // const [notes, setNotes] = useState([
  //   { id: 1, title: "Ideas para el portafolio", content: "Agregar proyectos de React y una landing page personal." },
  //   { id: 2, title: "Recetas favoritas", content: "Tacos al pastor, lasaña, y arroz con leche." },
  //   { id: 3, title: "Libros por leer", content: "Clean Code, Atomic Habits, y El hombre en busca de sentido." },
  //   { id: 4, title: "Notas del curso de React", content: "useState, useEffect, props, componentes y rutas." },
  //   { id: 5, title: "Recordatorios semanales", content: "Lunes: revisar tareas. Viernes: actualizar Trello." }
  // ]);

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [selectedNote, setSelectedNote] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  //Looking for filtered notes.
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  //Clicking on a note from the list.
  const handleSelectNote = (note) => {
    setSelectedNote(note);
  };

  //Updating a note from the editor.
  const handleUpdateNote = (updatedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
  };

  //Adding a new note.
  const handleAddNote = () => {
    const baseTitle = "New Note";
    // Filters all the notes titles that start with "New Note"
    const similarNotes = notes.filter(note =>
      note.title === baseTitle || note.title.startsWith(`${baseTitle}(`)
    );

    const newNote = {
      id: Date.now(),          // Generates a random ID based on the timestamp
      title: similarNotes.length === 0
        ? baseTitle
        : `${baseTitle}(${similarNotes.length + 1})`,
      content: "",
      createdAt: new Date().toISOString(), // Saves note creation date and time
      updatedAt: new Date().toISOString(),// Saves last time note was edited.
    };
    setNotes(prevNotes => [newNote, ...prevNotes]); // Adds new note to the top
    setSelectedNote(newNote);                  // Automatically selects new note
  };

  //Deleting an existing note
  const handleDeleteNote = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This note will be permanently deleted. This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        confirmButton: 'bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mx-2',
        cancelButton: 'bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded mx-2'
      },
      buttonsStyling: false
    }).then((result) => {
      if (result.isConfirmed) {




        setNotes(prevNotes => prevNotes.filter(note => note.id !== id));

        if (selectedNote.id === id) {
          setSelectedNote(null); //Unselect if it was selected
        }
        Swal.fire('Deleted!', 'Your note has been deleted.', 'success');
      }
    });
  };

  //Updates localStorage everytime a note changes.
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);


  return (
    <div className="h-screen flex flex-col">
      <Header handleAddNote={handleAddNote} />
      <div className="flex flex-1">
        <Sidebar notes={filteredNotes} onSelectNote={handleSelectNote} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Editor selectedNote={selectedNote} onUpdateNote={handleUpdateNote} onDeleteNote={handleDeleteNote} />
      </div>
    </div>
  );
}

export default App;
