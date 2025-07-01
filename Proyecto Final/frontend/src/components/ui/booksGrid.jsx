import BookCard from "./bookCard";

const BooksGrid = ({ books }) => {

    return (
        <div className="books-grid">
            {books.map((book) => (
                <BookCard
                    key={book.id}
                    book={book}
                />
            ))}
        </div>
    );
}
export default BooksGrid;