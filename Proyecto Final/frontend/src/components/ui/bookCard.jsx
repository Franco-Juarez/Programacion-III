import OutlineButton from "./outlineButton";

const BookCard = ({ book }) => {
    return (
        <div className="book-card">
            <h3>{book.titulo}</h3>
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
            <p>{book.anioPublicacion}</p>
            <span>•</span>
            <p>Calificación: 
            {
                book.calificacion ? 
                <span className="rating">
                    {book.calificacion}
                </span> : 
                <span className="rating"> 
                    <p className="no-rating">
                        No calificado
                    </p>
                </span>
            }
            </p>
            </div>
            <p className="book-description">Descripción: {book.descripcion}</p>
            <OutlineButton 
                text="Escribir Reseña" 
            />
        </div>
    );
}

export default BookCard;