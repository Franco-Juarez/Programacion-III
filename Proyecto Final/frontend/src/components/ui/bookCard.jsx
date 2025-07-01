const BookCard = ({ book }) => {
    return (
        <div className="book-card">
            <h3>{book.titulo}</h3>
            <p>{book.autor}</p>
            <div className="book-details">
                <p>{book.genero}</p>
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
            <p>{book.anioPublicacion}</p>
            <p>Calificación: 
            {
                book.calificacion ? 
                <span className="rating">{book.calificacion}</span> : 
                <span className="rating"> No calificado</span>
            }
            </p>
            <p className="book-description">Descripción: {book.descripcion}</p>
        </div>
    );
}

export default BookCard;