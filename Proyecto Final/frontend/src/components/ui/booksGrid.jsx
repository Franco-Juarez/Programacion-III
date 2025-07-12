import { useEffect, useState } from "react";
import BookCard from "./bookCard";
import EditBookModal from "./editBookModal";
import axios from "axios";
import ReviewModal from "./reviewModal";

const BooksGrid = ({ books, refreshBooks }) => {

    const [editingBook, setEditingBook] = useState(null);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [reviewModal, setReviewModalOpen] = useState(false)
    const [commentsByBook, setCommentsByBook] = useState({});
    const [selectedLibroId, setSelectedLibroId] = useState(null);

    const handleSaveEdit = async () => {
        try {
            await axios.put(`http://localhost:3001/api/libros/${editingBook.id}`, editingBook);
            setIsEditDialogOpen(false);
            setEditingBook(null);
            refreshBooks();
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
                        comment={commentsByBook[book.id] || []}
                        editingBook={editingBook}
                        setEditingBook={setEditingBook}
                        setIsEditDialogOpen={setIsEditDialogOpen}
                        setReviewModalOpen={() => {
                            setSelectedLibroId(book.id);
                            setReviewModalOpen(true);
                          }}
                    />
                ))}
            </div>
            <EditBookModal
                editingBook={editingBook}
                setEditingBook={setEditingBook}
                onSave={handleSaveEdit}
                isOpen={isEditDialogOpen}
                onClose={onCloseEditDialog}
            />
            <ReviewModal libroId={selectedLibroId} reviewModal={reviewModal} onClose={() => setReviewModalOpen(false)} />
        </>
    );
}
export default BooksGrid;