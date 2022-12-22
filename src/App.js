import { useState } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;

    const book = {
      id: books.length + 1,
      title: title,
    };
    setBooks([...books, book].sort((a, b) => a.title.localeCompare(b.title)));

    form.reset();
  };

  const handleDelete = (id) => {
    const filteredBooks = books.filter((item) => item.id !== id);
    setBooks(filteredBooks);
  };

  return (
    <div className="App bg-slate-900 text-white flex items-center justify-center">
      <div className="container mx-auto">
        <form onSubmit={handleSubmit} className="w-1/2">
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Book Title
            </label>
            <input
              type="text"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <button className="px-5 py-3 bg-blue-500 rounded">Add Book</button>
        </form>
        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left  mt-5">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Id
                </th>
                <th scope="col" className="py-3 px-6">
                  Booking Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr
                  key={book.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="py-4 px-6">{book.id}</td>
                  <td className="py-4 px-6">{book.title}</td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => handleDelete(book.id)}
                      className="px-5 py-2 bg-rose-500 rounded text-white">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
