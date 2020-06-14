import React from "react";

function SearchCard(props) {
    return(
        <div className="card mb-3">
            <h4 className="card-header">
                Book Search
            </h4>
            <form {...props} className="px-5 py-4">
                <div className="form-row">
                    <div className="col-1 align-middle">
                        <label className="mb-2">Book</label>
                    </div>
                    <div className="col-10">
                        <input type="text" className="form-control mb-2" id="searchInput"/>
                    </div>
                    <div className="col-1">
                        <button className="btn btn-primary mb-2" style={{ float: "right" }}>Search</button>
                    </div>                    
                </div>                
            </form>
        </div>
    );
}

export default SearchCard;