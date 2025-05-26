const Header = ({ handleAddNote, isDarkMode, toggleDarkMode, setIsSidebarOpen }) => {
    return (
        <header className="h-16 bg-white dark:bg-gray-900 text-black dark:text-white shadow-md p-4 border-b flex items-center transition-colors duration-500 ">

            <button
                className="md:hidden text-3xl mr-2"
                onClick={() => setIsSidebarOpen(true)}
            >
                ☰
            </button>
            <h1 className="text-lg md:text-2xl font-semibold grow text-left">
                Note Again
            </h1>

            <button
                onClick={handleAddNote}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-3 text-sm rounded transition duration-200 mx-1 md:py-2 md:px-4 md:text-base md:mx-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Note
            </button>

            <button
                onClick={toggleDarkMode}
                className="flex items-center gap-2 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-black dark:text-white py-1.5 px-3 text-sm rounded transition duration-200 mx-1 md:py-2 md:px-4 md:text-base md:mx-2"
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