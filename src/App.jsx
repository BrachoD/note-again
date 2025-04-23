import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";


function App() {
  const mockNotes = [
    { id: 1, title: "Nota 1", content: "Contenido de la nota 1" },
    { id: 2, title: "Nota 2", content: "Contenido de la nota 2" },
  ];

  const [selectedNote, setSelectedNote] = useState(mockNotes[0]);

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <Editor selectedNote={selectedNote} />
      </div>
    </div>
  );
}

export default App;
