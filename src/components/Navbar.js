import React from 'react'
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    let location = useLocation();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-success fixed-top">
                <Link className="navbar-brand" to="/">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkA…XFq+Unvqbvq4fdO1T9Q8ElcxZjio6XQAAAABJRU5ErkJggg==" width="30" height="30" className="d-inline-block align-top" alt="" />
                    GFG BVUCOEP
                </Link>
                {/* <Link className="navbar-brand" href="#">GFG BVUCOEP</Link> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className={`nav-link  ${location.pathname === "/" ? "active" : ""
                                }`} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link  ${location.pathname === "/about" ? "active" : ""
                                }`} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link  ${location.pathname === "/gallery" ? "active" : ""
                                }`} to="/gallery">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link  ${location.pathname === "/contact" ? "active" : ""
                                }`} to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
