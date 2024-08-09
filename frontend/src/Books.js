
import './bookStyle.css';
import Header from './Header';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from "./Footer";

function BookList() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [genreFilter, setGenreFilter] = useState('All');
    const [sortOption, setSortOption] = useState('Title');

    useEffect(() => {
        axios.get('http://localhost:8081/books')
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the books!', error);
            });
    }, []);

    const filteredBooks = books
        .filter(book =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter(book => genreFilter === 'All' || book.genre === genreFilter)
        .sort((a, b) => {
            if (sortOption === 'Title') {
                return a.title.localeCompare(b.title);
            } else if (sortOption === 'Rating') {
                return b.rating - a.rating;
            }
            return 0;
        });

    return (
        <div>
            <Header/>
            <div>
                <input
                    type="text"
                    placeholder="Search by title or author"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <select value={genreFilter} onChange={e => setGenreFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Dystopian">Dystopian</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Classic">Classic</option>
                    <option value="Historical Fiction">Historical Fiction</option>
                    <option value="Romance">Romance</option>
                    <option value="Drama">Drama</option>
                    <option value="Adventure">Adventure</option>

                </select>
                <select value={sortOption} onChange={e => setSortOption(e.target.value)}>
                    <option value="Title">Title</option>
                    <option value="Rating">Rating</option>
                </select>
            </div>
            <div className="books-grid">
                {filteredBooks.map(book => (
                    <BookCard
                        key={book.book_id}
                        title={book.title}
                        author={book.author}
                        rating={book.rating}
                    />
                ))}
            </div>


        <Footer/>
        </div>
    );
}

function BookCard({title, author, rating}) {
    return (
        <div className="book-card">
            <h3>{title}</h3>
            <p>{author}</p>
            <p>Rating: {rating}</p>
        </div>
    );
}

export default BookList;
