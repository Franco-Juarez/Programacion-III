const BookCard = ({ book }) => {
    return (
        <div className="book-card">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.genre}</p>
            <p>{book.year}</p>
            <p>{book.pages} páginas</p>
            <p>Calificación: {book.rating}</p>
            <p>Estado: {book.status}</p>
        </div>
    );
}

export default BookCard;