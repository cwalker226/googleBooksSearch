import React from "react";
import SearchCard from "../components/SearchCard";
import Results from "../components/Results";

function Search() {
    // onSubmit = () => {
    //     $.ajax({
    //         url: "https://www.googleapis.com/books/v1/volumes?q=",
    //         method: "GET"
    //     }).then(function(response){

    //     });
    // }
    return(
        <div>
            <SearchCard/>
            <Results/>
        </div>
    );
}

export default Search;