import React, { useState } from "react";
import SearchCard from "../components/SearchCard";
import Results from "../components/Results";
import axios from "axios";
import API from "../utils/api";

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
        
        API.saveBook(books[saveID])
        .catch(err => console.log(err));
    }

    return(        
        <div className="m-4">
            <SearchCard onSubmit={handleSearch}/>
            <Results cardTitle="Results" window="search" books={books} handleSave={handleSave}/>
        </div>        
    );
}

export default Search;