import React from "react";

function SearchCard() {
    return(
        <div className="card">
            <div className="card-header">
                Book Search
            </div>
            <form>
                <div className="form-group">
                    <label for="searchInput">Book</label>
                    <input type="text" className="form-control" id="searchInput"/>
                </div>
                <button type="submit" className="btn btn-primary justify-content-end">Search</button>
            </form>
        </div>
    );
}

export default SearchCard;