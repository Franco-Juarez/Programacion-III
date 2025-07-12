import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/common/header";
import BooksGrid from "./components/ui/booksGrid";
import BookFilter from "./components/ui/bookFilter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BookDetails } from "./components/bookDetails";


function App() {
  const [booksCount, setBooksCount] = useState(0);
  const [books, setBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  const [genresList, setGenresList] = useState([]);
  const [genre, setGenre] = useState("all");
  const [state, setState] = useState("all");
  const [refreshBooks, setRefreshBooks] = useState(false);

  
  const fetchFilteredBooks = async () => {
    const response = await fetch(`http://localhost:3001/api/libros/generos`);
    if (!response.ok) {
      console.error("Error al obtener libros filtrados");
      return;
    }
    const data = await response.json();
    setGenresList(data);
  };
  
  const fetchBooks = async () => {
    const response = await fetch("http://localhost:3001/api/libros");
    if (!response.ok) {
      console.error("Error al obtener libros");
      return;
    }
    const data = await response.json();
    setBooks(data);
    setAllBooks(data);
    setBooksCount(data.length);
  };

  useEffect(() => {
    fetchBooks();
    fetchFilteredBooks();
  }, [refreshBooks]);

  const handleFiltersChange = (selectedGenre, selectedState) => {
    setGenre(selectedGenre);
    setState(selectedState);
    
    let filteredBooks = allBooks;
    
    // Apply genre filter if not "all"
    if (selectedGenre !== "all") {
      filteredBooks = filteredBooks.filter((book) => book.genero === selectedGenre);
    }
    
    // Apply state filter if not "all"
    if (selectedState !== "all") {
      filteredBooks = filteredBooks.filter((book) => book.estado === selectedState);
    }
    
    setBooks(filteredBooks);
    setBooksCount(filteredBooks.length);
  };

  return (
    <Router>
    <div className="container">
      <Header booksCount={booksCount} setRefreshBooks={setRefreshBooks} />
      <BookFilter genresList={genresList} handleFiltersChange={handleFiltersChange}/>
      <Routes>
        <Route
          path="/"
          element={<BooksGrid books={books} refreshBooks={fetchBooks} />}
        />
        <Route
          path="/libro/:id"
          element={<BookDetails
            
          />}
        />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
