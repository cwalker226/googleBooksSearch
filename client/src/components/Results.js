import React from "react";
import ResultRow from "./ResultRow";

function Results(props) {
    return (
        <div className="card">
            <h4 className="card-header">
                {props.cardTitle}
            </h4>
            {props.books.length ? (
                <div>
                    {props.books.map((book, ind) => (
                        <ResultRow key={ind}
                                window={props.window}
                                id={props.window === "search" ? ind : book._id}
                                title={book.title}
                                subtitle={book.subtitle}
                                authors={book.authors}
                                imgURL={book.thumbnail}
                                infoLink={book.link}
                                description={book.description}
                                onClick={props.window === "search" ? props.handleSave : props.deleteBook}/>
                    ))}
                </div>                
            ) : (
                <div className="h3 p-4 text-center">No Results to Display</div>
            )}
        </div>
    );
}

export default Results;