const Header = ({handleAddNote}) => {
    return (
        <header className="bg-white shadow-md p-4 border-b flex">
            <h1 className="text-2xl font-semibold grow">Note Again</h1>
            <button onClick={handleAddNote} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Add Note ➕
            </button>
        </header>
    );
};

export default Header;
