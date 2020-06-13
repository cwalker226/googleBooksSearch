import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
    const location = useLocation();
    
    return (
        <nav className="navbar">
            <Link className="navbar-brand" to="/">
                <span className="h1 name">Google Books</span>
            </Link>
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/search"
                        className={location.pathname === "/search" ? "nav-link active" : "nav-link"}>
                        Search
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/saved"
                        className={location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
                        Saved
                    </Link>
                </li>
            </ul>
            <hr/>
        </nav>
    );
}

export default Nav;