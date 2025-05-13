const Header = ({ handleAddNote, isDarkMode, toggleDarkMode }) => {
    return (
        <header className="bg-white dark:bg-gray-900 text-black dark:text-white shadow-md p-4 border-b flex transition-colors duration-500">
            <h1 className="text-2xl font-semibold grow">Note Again</h1>
            <button
                onClick={handleAddNote}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-200 mx-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Note
            </button>
            <button
                onClick={toggleDarkMode}
                className="flex mx-2 items-center gap-2 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-black dark:text-white py-2 px-4 rounded transition duration-200"
            >
                {isDarkMode ? (
                    <>
                        ☀️ Light
                    </>
                ) : (
                    <>
                        🌙 Dark
                    </>
                )}
            </button>
        </header>
    );
};

export default Header;
