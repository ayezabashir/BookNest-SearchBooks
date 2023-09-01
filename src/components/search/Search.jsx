import { BiSearchAlt } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import { useRef, useEffect } from 'react';
const Search = () => {
    const { setSearchTerm, setResultTitle } = useGlobalContext();
    const searchText = useRef('');
    const navigate = useNavigate();

    useEffect(() => searchText.current.focus(), []);
    const handleSubmit = (e) => {
        e.preventDefault();
        let tempSearchTerm = searchText.current.value.trim();
        if ((tempSearchTerm.replace(/[^\w\s]/gi, "")).length === 0) {
            setSearchTerm("Harry Potter");
            setResultTitle("Please Enter Something");
        } else {
            setSearchTerm(searchText.current.value);
        }
        navigate('/book');
    }
    return (
        <div className="search-container">
            <div className="search-content">
                <form className="search-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Harry Potter...'
                        ref={searchText}
                    />
                    <button type="submit" onClick={handleSubmit}>
                        <BiSearchAlt className='icon' />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Search;
