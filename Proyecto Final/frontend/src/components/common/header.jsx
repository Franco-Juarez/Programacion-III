'use client';
import { useState } from "react";
import Button from "../ui/button";

const Header = ({ booksCount }) => {

    const [bookTitle, setBookTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [status, setStatus] = useState('unread'); 
    const [books, setBooks] = useState({});
    const [showForm, setShowForm] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = {
            titulo: bookTitle,
            genero: genre,
            estado: status,
            anioPublicacion: new Date().getFullYear(),
            calificacion: null,
            descripcion: ''
        };
        setBooks(newBook);
        setBookTitle('');
        setGenre('');
        setStatus('unread');
        console.log('Libro agregado:', newBook);
    };

    const handleShowForm = () => {
        setShowForm(!showForm);
    };

    return (
        <header className="header">
            <span>
                <h1>
                    Mi Biblioteca Personal
                </h1>
                <p>
                    {booksCount} libros en tu colección
                </p>
            </span>
            <Button
                text="Agregar Libro"
                onClick={handleShowForm}
            />
            {showForm && (
            <aside 
            className="add-book-form"
            >
                <button
                className="close-button"
                onClick={handleShowForm}
                >
                    X
                </button>
                <form onSubmit={handleSubmit}>
                {/* Agregar un libro */}
                    <h2>Agregar un libro</h2>
                    <label htmlFor="search">Título</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Agregar libro"
                    />
                    <label htmlFor="genre">Género:</label>
                    <select
                        id="genre"
                        name="genre"
                    >
                        <option value="fantasy">Fantasía</option>
                        <option value="science-fiction">Ciencia Ficción</option>
                        <option value="mystery">Misterio</option>
                        <option value="romance">Romance</option>
                        <option value="horror">Horror</option>
                        <option value="non-fiction">No Ficción</option>
                    </select>
                    <label htmlFor="status">Estado:</label>
                    <select
                        id="status"
                        name="status"
                    >
                        <option value="unread">No leído</option>
                        <option value="reading">Leyendo</option>
                        <option value="read">Leído</option>
                    </select>
                    <button
                        className="form-button"
                        type="submit"
                    >
                        Agregar Libro
                    </button>
                </form>
            </aside>
            )}
        </header>
    );
}

export default Header;