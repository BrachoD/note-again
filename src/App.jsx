import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import Swal from 'sweetalert2';
import { Toaster } from "react-hot-toast";
import { toast } from 'react-hot-toast';


function App() {

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [selectedNote, setSelectedNote] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  const [sortOrderAsc, setSortOrderAsc] = useState(true);

  //Dark mode logic.
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  const [currentContent, setCurrentContent] = useState("");

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(storedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', !isDarkMode);

  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

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

    if (selectedNote && !currentContent.trim()) {
      toast.error("Finish the current empty note before creating a new one.");
      return;
    }

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
    toast.success('Note added!');
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

  //Sort notes by name.
  const sortNotesByName = () => {
    const sorted = [...notes].sort((a, b) => {
      return sortOrderAsc ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
    });
    setNotes(sorted);
    setSortOrderAsc(!sortOrderAsc)
  };

  //Updates localStorage everytime a note changes.
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  //Sidebar behaviour logic.
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />

      <div className="h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500 animate-fadeIn">
        <Header handleAddNote={handleAddNote} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} setIsSidebarOpen={setIsSidebarOpen} />
        <div className="flex flex-1 relative ">
          <Sidebar notes={filteredNotes} onSelectNote={handleSelectNote} searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSortNotes={sortNotesByName} sortOrderAsc={sortOrderAsc} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
          <Editor selectedNote={selectedNote} onUpdateNote={handleUpdateNote} onDeleteNote={handleDeleteNote} onContentChange={setCurrentContent} />
        </div>
      </div>
    </>
  );
}

export default App;
