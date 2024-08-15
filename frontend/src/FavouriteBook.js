import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FavouriteBook({ title, author, rating, image_path }) {
    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        const addedBooks = JSON.parse(localStorage.getItem('addedBooks')) || {};
        setIsAdded(!!addedBooks[title]);
    }, [title]);

    const handleClick = () => {
        axios.post('http://localhost:8081/preferences-books/added_books', null, {
            params: {
                bookTitle: title,
                image: image_path,
                author: author,
                rating: rating
            }
        })
            .then(response => {
                setIsAdded(true);
                const addedBooks = JSON.parse(localStorage.getItem('addedBooks')) || {};
                addedBooks[title] = true;
                localStorage.setItem('addedBooks', JSON.stringify(addedBooks));
            })
            .catch(error => {
                console.error('There was an error adding the book to favourites!', error);
            });
    };

    return (
        <div className="book-card">
            <img src={image_path} alt={title} className="book-image" />
            <div className="book-info">
                <h3>{title}</h3>
                <p>{author}</p>
                <p>Rating: {rating}</p>
            </div>
        </div>
    );
}

export default FavouriteBook;
