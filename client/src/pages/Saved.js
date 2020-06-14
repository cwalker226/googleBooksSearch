import React, { useState, useEffect } from "react";
import Results from "../components/Results";
import API from "../utils/api";

function Saved() {
    // Setting our component's initial state
    const [books, setBooks] = useState([]);

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, []);

    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
            .then(res => setBooks(res.data))
            .catch(err => console.log(err));
    };

    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteBook(event) {
        const saveID = event.target.id;
        API.deleteBook(saveID)
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }

    return(
        <Results cardTitle="Saved Books" window="saved" books={books} deleteBook={deleteBook}/>
    );
}

export default Saved;