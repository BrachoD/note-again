import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";

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
    const newNote = {
      id: Date.now(),          // Generates a random ID based on the timestamp
      title: "Nueva nota",
      content: ""
    };
    setNotes(prevNotes => [newNote, ...prevNotes]); // Adds new note to the top
    setSelectedNote(newNote);                  // Automatically selects new note
  };

  //Deleting an existing note
  const handleDeleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));

    if (selectedNote.id === id) {
      setSelectedNote(null); //Unselect if it was selected
    }
  };

  //Updates localStorage everytime a note changes.
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  

  return (
    <div className="h-screen flex flex-col">
      <Header handleAddNote={handleAddNote} />
      <div className="flex flex-1">
        <Sidebar notes={notes} onSelectNote={handleSelectNote} />
        <Editor selectedNote={selectedNote} onUpdateNote={handleUpdateNote} onDeleteNote={handleDeleteNote}/>
      </div>
    </div>
  );
}

export default App;
