import React from "react";

function SearchCard(props) {
    return(
        <div className="card">
            <div className="card-header">
                Book Search
            </div>
            <form {...props}>
                <div className="form-group">
                    <label>Book</label>
                    <input type="text" className="form-control" id="searchInput"/>
                </div>
                <button className="btn btn-primary" style={{ float: "right" }}>Search</button>
            </form>
        </div>
    );
}

export default SearchCard;