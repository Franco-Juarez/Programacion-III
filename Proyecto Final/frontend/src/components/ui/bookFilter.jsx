import OutlineButton from "./outlineButton";

const BookFilter = ({genresList, handleFiltersChange}) => {

const handleFilter = (e) => {
    e.preventDefault();
    console.log('filter');
    handleFiltersChange(
        e.target.genre.value,
        e.target.status.value
    );
}


const status = [{state: 'all', value: 'Todos'},{state: 'read', value: 'Leído'},{state: 'unread', value: 'No leído'},{state: 'reading', value: 'Leyendo'}];
    
    return (
        <div className='book-filter'>
            <form onSubmit={handleFilter}>
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
                        {status.map((state, index) => {
                            return (
                                <option key={index} name={state.state} value={state.state}>{state.value}</option>
                            )
                        })}
                       
                    </select>

                    <label htmlFor='genre'>Todos los géneros</label>
                    <select id='genre' name='genre'>
                        <option value='all'>Todos</option>
                        {genresList.map((genre, index) => {
                            return (
                                <option key={index} name={genre} value={genre}>{genre}</option>
                            )
                        })}
                        {/* <option value='all'>All</option>
                        <option value='fiction'>Fiction</option>
                        <option value='non-fiction'>Non-Fiction</option>
                        <option value='fantasy'>Fantasy</option>
                        <option value='dystopian'>Dystopian</option> */}
                    </select>
                </div>
                <OutlineButton text='Aplicar Filtros' />
            </form>
        </div>
    );
}

export default BookFilter;