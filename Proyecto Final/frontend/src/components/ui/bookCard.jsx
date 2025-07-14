import { useNavigate } from "react-router-dom";
import OutlineButton from "./outlineButton";

const BookCard = ({ book, editingBook, setEditingBook, setIsEditDialogOpen, setReviewModalOpen }) => {

    const navigate = useNavigate();

    const handleEditClick = (book) => {
        setEditingBook(book);
        setIsEditDialogOpen(true);
        console.log("Book to edit:", book);
    };

    const estrellasCalificacion = (rating) => {
        return Array.from({ length: 5 }).map((_, i) =>
          <span key={i} className={i < rating ? "star filled" : "star"}>★</span>
        );
      };
      
    return (
        <div 
        onClick={() => navigate(`/libro/${book.id}`)}
        className="book-card">
            <div className="flex-box">
                <h3>{book.titulo}</h3>
                <OutlineButton text={"Editar"} onClick={(e) => {
                    e.stopPropagation();
                    handleEditClick(book);
                }} />
            </div>
            <p>{book.autor}</p>
            <div className="book-details">
                <p className="genre-badge">{book.genero}</p>
                <p>
                    {
                        book.estado === 'unread' ?
                            <span className="status unread">No leído</span> :
                            book.estado === 'reading' ?
                                <span className="status reading">Leyendo</span> :
                                book.estado === 'read' ?
                                    <span className="status read">Leído</span> :
                                    null
                    }
                </p>
            </div>
            <div className="book-details">
                <p>Año de Publicación: {book.anioPublicacion}</p>
            </div>
            <p className="book-description">Descripción: {book.descripcion}</p>
            <div className="book-card-end">
                <div className="book-star">
                    {estrellasCalificacion(book.calificacion)}
                </div>
                <OutlineButton width={"100%"}
                    text="Escribir Reseña"
                    onClick={(e) => {
                        e.stopPropagation()
                        setReviewModalOpen(true)
                    }}
                />
            </div>
        </div>
    );
}

export default BookCard;