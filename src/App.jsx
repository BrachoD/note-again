import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";


function App() {
  const [notes, setNotes] = useState([
    { id: 1, title: "Ideas para el portafolio", content: "Agregar proyectos de React y una landing page personal." },
    { id: 2, title: "Recetas favoritas", content: "Tacos al pastor, lasaña, y arroz con leche." },
    { id: 3, title: "Libros por leer", content: "Clean Code, Atomic Habits, y El hombre en busca de sentido." },
    { id: 4, title: "Notas del curso de React", content: "useState, useEffect, props, componentes y rutas." },
    { id: 5, title: "Recordatorios semanales", content: "Lunes: revisar tareas. Viernes: actualizar Trello." }
  ]);

  const [selectedNote, setSelectedNote] = useState(null);

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar notes={notes} onSelectNote={setSelectedNote} />
        <Editor selectedNote={selectedNote}/>
      </div>
    </div>
  );
}

export default App;
