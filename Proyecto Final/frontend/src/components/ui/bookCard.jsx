import OutlineButton from "./outlineButton";


const BookCard = ({ book }) => {

    const estrellasCalificacion = (rating) => {
        return Array.from({ length: 5 }).map((_, i) =>
            i < rating ? (
                <span key={i} style={{ color: '#FFD700', fontSize: '3rem', marginRight: 2 }}>★</span>
            ) : (
                <span key={i} style={{ color: '#000', fontSize: '3rem', marginRight: 2 }}>☆</span>
            )
        );
    };

    return (
        <div className="book-card">
            <div className="flex-box">
                <h3>{book.titulo}</h3>
                <OutlineButton text={"Editar"} />
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
                />

            </div>
        </div>
    );
}

export default BookCard;