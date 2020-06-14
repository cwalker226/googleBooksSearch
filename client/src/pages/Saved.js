import React, { useState, useEffect } from "react";
import Results from "../components/Results";
import API from "../utils/api";

function Saved() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks()
    }, []);

    function loadBooks() {
        API.getBooks()
            .then(res => setBooks(res.data))
            .catch(err => console.log(err));
    };

    return(
        <Results cardTitle="Saved Books" window="saved" books={books}/>
    );
}

export default Saved;