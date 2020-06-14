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
                    {props.books.map(book => (
                        <ResultRow key={book.id}
                                window={props.window}
                                id={book.id}
                                title={book.title}
                                subtitle={book.subtitle}
                                author={book.author}
                                imgURL={book.thumbnail}
                                infoLink={book.link}
                                description={book.description}
                                onClick={props.handleSave}/>
                    ))}
                </div>                
            ) : (
                <div className="h3">No Results to Display</div>
            )}
        </div>
    );
}

export default Results;