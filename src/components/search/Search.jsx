import { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi'
const api_url = 'https://openlibrary.org/search.json?title=';

const Search = () => {
    const [inputtext, setInputText] = useState("");

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    }

    async function fetchBookData(event) {
        event.preventDefault();
        let searchWord = api_url + inputtext;
        const word = await fetch(searchWord);
        const data = await word.json();
        console.log(data);
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
