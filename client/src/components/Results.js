import React from "react";
import ResultRow from "./ResultRow";

function Results(props) {
    return (
        <div className="card">
            <div className="card-header">
                {props.cardTitle}
            </div>
            {props.books.length ? (
                <div>
                    {props.books.map((book, ind) => (
                        <ResultRow key={ind}
                                window={props.window}
                                id={props.window === "search" ? ind : book._id}
                                title={book.title}
                                subtitle={book.subtitle}
                                author={book.author}
                                imgURL={book.thumbnail}
                                infoLink={book.link}
                                description={book.description}
                                onClick={props.window === "search" ? props.handleSave : props.deleteBook}/>
                    ))}
                </div>                
            ) : (
                <div className="h3">No Results to Display</div>
            )}
        </div>
    );
}

export default Results;