import React from 'react';
import { Link } from 'react-router-dom';
import starWarsLogo from './img/StarWars.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="logo">
                <span>The </span>
                <img src={starWarsLogo} alt="Star Wars Logo" />
                <span>  Blog</span>
            </h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
};

export default Navbar;
