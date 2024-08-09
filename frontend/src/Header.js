import React from 'react';
import './dashboard.css';

function Header() {
    return (
        <header>
            <nav>
                <div className="container">
                    <h1>Book Recommender</h1>
                    <ul>
                        <li><a href="/Home">Home</a></li>
                        <li><a href="/Books">Books</a></li>
                        <li><a href="#">Recommendations</a></li>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
