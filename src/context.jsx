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
            console.log(docs);
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