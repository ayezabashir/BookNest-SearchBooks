import { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi'
const api_url = 'https://openlibrary.org/search.json?title=';

const Search = () => {
    const [inputtext, setInputText] = useState("");

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    }

    const fetchBookData = (event) => {
        event.preventDefault();
        let searchWord = api_url + inputtext;
        console.log(searchWord);
    }

    return (
        <div className="search-container">
            <div className="search-content">
                <form className="search-form">
                    <input
                        type="text"
                        onChange={handleInputChange}
                        value={inputtext}
                        placeholder='Search any book...'
                    />
                    <button type="submit" onClick={fetchBookData}>
                        <BiSearchAlt className='icon' />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Search;
