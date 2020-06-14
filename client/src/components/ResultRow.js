import React from "react";

function ResultRow(props) {
    function printAuthors(authors) {
        let authorList = "";
        for(let i=0; i < authors.length; i++){
            if(i < authors.length-1){
                authorList += authors[i] + ", ";
            }else{
                authorList += authors[i];
            }
        }
        return authorList;
    }
    return (
        <div className="container border px-4 py-2">
            <div className="row">
                <div className="col-9">
                    <div className="h3">{props.title}</div>
                    <div className="h5">{props.subtitle}</div>
                    <p><strong>Written By:</strong> {printAuthors(props.authors)}</p>
                </div>
                <div className="col-3 d-inline justify-content-right">
                    <a className="btn btn-secondary mr-2" href={props.infoLink}>View</a>
                    <div className="btn btn-info" onClick={props.onClick} id={props.id}>{props.window === "search" ? "Save" : "Delete"}</div>
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    <img src={props.imgURL} alt={props.title}/>
                </div>
                <div className="col-10">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ResultRow;