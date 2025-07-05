import { useState } from "react";
import BookCard from "./bookCard";
import EditBookModal from "./editBookModal";
import axios from "axios";

const BooksGrid = ({ books, refreshBooks }) => {

    const [editingBook, setEditingBook] = useState(null);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

    const handleSaveEdit = async () => {
        try {
            await axios.put(`http://localhost:3001/api/libros/${editingBook.id}`, editingBook);
            setIsEditDialogOpen(false);
            setEditingBook(null);
            refreshBooks(); // Refresh the book list after saving
        } catch (error) {
            console.error("Error saving book:", error);
            alert("Error al guardar el libro. Por favor, inténtelo de nuevo.");
        }
    }

    const onCloseEditDialog = () => {
        setIsEditDialogOpen(false);
        setEditingBook(null);
    }

    return (
        <>
            <div className="books-grid">
                {books.map((book) => (
                    <BookCard
                        key={book.id}
                        book={book}
                        editingBook={editingBook}
                        setEditingBook={setEditingBook}
                        setIsEditDialogOpen={setIsEditDialogOpen}
                    />
                ))}
            </div>
            <EditBookModal editingBook={editingBook} setEditingBook={setEditingBook} onSave={handleSaveEdit} isOpen={isEditDialogOpen} onClose={onCloseEditDialog} />
        </>
    );
}
export default BooksGrid;