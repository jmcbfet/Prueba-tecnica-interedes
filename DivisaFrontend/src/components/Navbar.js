import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Conversion</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/historial">Historial</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar