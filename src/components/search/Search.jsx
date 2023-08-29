import { BiSearchAlt } from 'react-icons/bi'
const Search = () => {
    return (
        <div className="search-container">
            <div className="search-content">
                <form className="search-form">
                    <input type="text" placeholder='Search any book...' />
                    <button type="submit">
                        <BiSearchAlt className='icon' />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Search
