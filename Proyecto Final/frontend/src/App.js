import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/common/header';
import BooksGrid from './components/ui/booksGrid';
import BookFilter from './components/ui/bookFilter';

function App() {

  const [booksCount, setBooksCount] = useState(0);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('http://localhost:3001/api/libros');
      if (!response.ok) {
        console.error('Error al obtener libros');
        return;
      }
      const data = await response.json();
      setBooks(data);
      setBooksCount(data.length);
    };
    fetchBooks();
  }, []);

  return (
    <div className='container'>
      <Header
        booksCount={booksCount}
      />
      <BookFilter />
      <BooksGrid
        books={books}
      />
    </div>
  );
}

export default App;
