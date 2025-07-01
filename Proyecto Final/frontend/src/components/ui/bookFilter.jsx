const BookFilter = () => {
    return (
        <div className='book-filter'>
            <form>
                <div className="input-group">
                    <input
                        type='text'
                        id='search'
                        name='search'
                        placeholder='Buscar por título, autor o género...'
                        className='search-input'
                    >
                    </input>
                    <label htmlFor='status'>Todos los estados</label>
                    <select id='status' name='status'>
                        <option value='all'>All</option>
                        <option value='read'>Read</option>
                        <option value='to read'>To Read</option>
                    </select>

                    <label htmlFor='genre'>Todos los géneros</label>
                    <select id='genre' name='genre'>
                        <option value='all'>All</option>
                        <option value='fiction'>Fiction</option>
                        <option value='non-fiction'>Non-Fiction</option>
                        <option value='fantasy'>Fantasy</option>
                        <option value='dystopian'>Dystopian</option>
                    </select>
                </div>
                <button className="outline-button" type='submit'>Aplicar Filtros</button>
            </form>
        </div>
    );
}

export default BookFilter;