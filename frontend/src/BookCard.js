import React from 'react';
import './books.css';

function BookCard({ title, author, imgSrc, rating }) {
    return (
        <div className="book-card">
            <h4>{title}</h4>
            <p>{author}</p>
            <p>Rating: {rating}</p>
            <button>More Info</button>
        </div>
    );
}

export default BookCard;
