import React, { useContext } from "react";
import BooksContext from "../utils/booksContext";

function ResultRow(props) {
    const { handleSave } = useContext(BooksContext);

    return (
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <div className="h3">{props.title}</div>
                    <div className="h4">{props.subtitle}</div>
                    <div className="h5">Written By {props.author}</div>
                </div>
                <div className="col-3">
                    <a className="btn" href={props.infoLink}>View</a>
                    {props.window === "search" ? (
                        <div className="btn" onClick={handleSave} id={props.id}>Save</div>
                    ) : (
                        <div className="btn">Delete</div>
                    )}                    
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <img src={props.imgURL} alt={props.title}/>
                </div>
                <div className="col-8">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ResultRow;