const Header = ({ handleAddNote, isDarkMode, toggleDarkMode }) => {
    return (
        <header className="bg-white dark:bg-gray-900 text-black dark:text-white shadow-md p-4 border-b flex">
            <h1 className="text-2xl font-semibold grow">Note Again</h1>
            <button onClick={handleAddNote} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Add Note ➕
            </button>
            <button onClick={toggleDarkMode} className="bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 py-1 px-3 rounded flex items-center gap-2 transition">
                {isDarkMode ? '🌙 Dark' : '☀️ Light'}
            </button>
        </header>
    );
};

export default Header;
