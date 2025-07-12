import { useState } from "react";
import Button from "../ui/button";

const Header = ({ booksCount, setRefreshBooks }) => {

    const [bookTitle, setBookTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [status, setStatus] = useState('unread'); 
    const [year, setYear] = useState()
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState({})
    const [books, setBooks] = useState({});
    const [showForm, setShowForm] = useState(false);

    const cleanFields = () => {
        setBookTitle('')
        setGenre('')
        setStatus('unread')
        setYear('')
        setAuthor('')
        setDescription('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBook = {
            titulo: bookTitle,
            autor: author,
            genero: genre,
            estado: status,
            anioPublicacion: year,
            calificacion: 0,
            descripcion: description
        };
        try {
            const response = await fetch('http://localhost:3001/api/libros', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBook)
            })
            if (!response.ok) {
                throw new Error('Error al agregar el libro');
            }
            setRefreshBooks(prev => !prev);
        }catch(error) {
            console.error(error)
        }
        cleanFields();
        setShowForm(false);
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
                    onChange={(e) => setBookTitle(e.target.value)}
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Agregar libro"
                    />
                    <label htmlFor="author">Autor:</label>
                    <input 
                        onChange={(e) => setAuthor(e.target.value)}
                        type="text" 
                        id="author" 
                        name="author" 
                        placeholder="Nombre del autor"
                        required
                    />
                     <label htmlFor="year">Año de Publicación</label>
                    <input 
                        onChange={(e) => setYear(e.target.value)}
                        type="number" 
                        id="year" 
                        name="year" 
                        placeholder="Año de publicación"
                        required
                    />
                    <label htmlFor="genre">Género:</label>
                    <input 
                    onChange={(e) => setGenre(e.target.value)}
                    type="text" id="genre" name="genre" placeholder="Fantasía"/>
                    <label htmlFor="status">Estado:</label>
                    <select
                        id="status"
                        name="status"
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="unread">No leído</option>
                        <option value="reading">Leyendo</option>
                        <option value="read">Leído</option>
                    </select>
                    <label htmlFor="description">Descripción:</label>
                    <textarea 
                        onChange={(e) => setDescription(e.target.value)}
                        id="description" 
                        name="description" 
                        placeholder="Descripción del libro"
                        required
                    />
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