import React, { useState } from "react";
import SearchCard from "../components/SearchCard";
import Results from "../components/Results";
import axios from "axios";
import API from "../utils/api";
import BooksContext from "../utils/booksContext";

function Search() {
    const [books, setBooks] = useState([]);

    function handleSearch(event) {
        event.preventDefault();
        const searchTerm = event.target.searchInput.value;
        const queryURL = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
        axios.get(queryURL)
        .then(res => {
            let results = [];
            const resItems = res.data.items;
            
            resItems.forEach(item => {
                const info = item.volumeInfo;
                const id = item.id;
                results.push({
                    id: id,
                    authors: info.authors,
                    description: info.description,
                    thumbnail: info.imageLinks.thumbnail,
                    link: info.infoLink,
                    title: info.title,
                    subtitle: info.subtitle
                });
            });
            setBooks(results);
        })
        .catch(err => console.log(err));
    }

    function handleSave(event) {
        const saveID = event.target.id;
        const saveResult = books.find(book => book.id === saveID);
        
        API.saveBook({
            authors: saveResult.authors,
            description: saveResult.description,
            thumbnail: saveResult.thumbnail,
            link: saveResult.link,
            title: saveResult.title,
            subtitle: saveResult.subtitle
        })
        .catch(err => console.log(err));
    }

    return(
        <BooksContext.Provider value={{ books, handleSave }}>
            <div>
                <SearchCard onSubmit={handleSearch}/>
                <Results cardTitle="Results" window="search"/>
            </div>
        </BooksContext.Provider>
    );
}

export default Search;