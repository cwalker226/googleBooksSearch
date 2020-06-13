import React from "react";

function ResultRow() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <div className="h3">Title</div>
                    <div className="h4">Subtitle</div>
                    <div className="h5">Written By Author</div>
                </div>
                <div className="col-3">
                    <button>View</button>
                    <button>Save</button>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <img src="" alt=""/>
                </div>
                <div className="col-8">
                    <p>Description</p>
                </div>
            </div>
        </div>
    );
}

export default ResultRow;