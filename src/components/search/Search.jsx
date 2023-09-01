import { BiSearchAlt } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
const Search = () => {

    return (
        <div className="search-container">
            <div className="search-content">
                <form className="search-form">
                    <input
                        type="text"
                        placeholder='Harry Potter...'
                    />
                    <button type="submit">
                        <BiSearchAlt className='icon' />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Search;
