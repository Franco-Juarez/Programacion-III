import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/common/header';
import BooksGrid from './components/ui/booksGrid';
import BookFilter from './components/ui/bookFilter';

function App() {

  const [booksCount, setBooksCount] = useState(3);
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'El Principito',
      author: 'Antoine de Saint-Exupéry',
      status: 'to read',
      rating: 5,
      genre: 'Fiction',
      pages: 96,
      year: 1943,
    },
    {
      id: 2,
      title: 'Cien años de soledad',
      author: 'Gabriel García Márquez',
      status: 'reading',
      rating: 5,
      genre: 'Magical Realism',
      pages: 417,
      year: 1967,
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      status: 'read',
      rating: 4,
      genre: 'Dystopian',
      pages: 328,
      year: 1949,
    },
    {
      id: 4,
      title: 'Sapiens: De animales a dioses',
      author: 'Yuval Noah Harari',
      status: 'to read',
      rating: 4,
      genre: 'Non-fiction',
      pages: 464,
      year: 2011,
    },
    {
      id: 5,
      title: 'Rayuela',
      author: 'Julio Cortázar',
      status: 'read',
      rating: 5,
      genre: 'Experimental Fiction',
      pages: 601,
      year: 1963,
    },
  ]);


  useEffect(() => {
    const fetchBooksCount = async () => {
      const response = await fetch('http://localhost:3001/api/libros');
      if (!response.ok) {
        console.error('Error al obtener libros');
        return;
      }
      const data = await response.json();
      // setBooks(data.books);
    };
    fetchBooksCount();
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
