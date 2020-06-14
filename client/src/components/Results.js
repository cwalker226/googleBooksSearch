import React, { useContext } from "react";
import ResultRow from "./ResultRow";
import BooksContext from "../utils/booksContext";

function Results(props) {
    const { books } = useContext(BooksContext);

    return (
        <div className="card">
            <div className="card-header">
                {props.cardTitle}
            </div>
            {books.length ? (
                <div>
                    {books.map(book => (
                        <ResultRow key={book.id}
                                window={props.window}
                                id={book.id}
                                title={book.title}
                                subtitle={book.subtitle}
                                author={book.author}
                                imgURL={book.thumbnail}
                                infoLink={book.link}
                                description={book.description}/>
                    ))}
                </div>                
            ) : (
                <div className="h3">No Results to Display</div>
            )}
        </div>
    );
}

export default Results;