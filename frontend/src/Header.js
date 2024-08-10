import React from 'react';
import './header.css';

function Header() {
    return (

    <div>
        <header>
            <nav>
                <a href="/" className="logo">Book Recommender</a>
                <ul>
                    <li><a href="/home">Home Page</a></li>
                    <li><a href="/books">Book Catalog</a></li>
                    <li><a href="#">Recommendations</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/logout">Logout</a></li>
                </ul>
            </nav>
        </header>
    </div>
)
    ;
}

export default Header;
