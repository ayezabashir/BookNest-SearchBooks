/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect, useCallback } from "react";
const api_url = 'https://openlibrary.org/search.json?title=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('Harry Potter');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");

    const fetchBooks = useCallback(async () => {
        setLoading(true);
        try {
            const resp = await fetch(api_url + searchTerm);
            const data = await resp.json();
            const { docs } = data;
            if (docs) {
                const newBooks = docs.slice(0, 20).map((book) => {
                    const { key, author_name, cover_i, edition_count, first_publish_year, title } = book;
                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title,
                    }
                });
                setBooks(newBooks);

                if (newBooks.length > 1) {
                    setResultTitle('Your Search Result');
                } else {
                    setResultTitle('No Search Result Found');
                }
            } else {
                setBooks([]);
                setResultTitle('No Search Result Found!');
            }
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false)
        }

    }, [searchTerm]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks])

    return (
        <AppContext.Provider value={{
            loading, books, setSearchTerm, resultTitle, setResultTitle
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };