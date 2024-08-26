
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './bookStyle.css';
import Header from './Header';
import Footer from './Footer';
import BookCard from './BookCard';

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


            <section className="hero">

                <div className="background-images">
                    <img
                        src="https://4.bp.blogspot.com/-inx65pY1b34/WWoeJbZMf_I/AAAAAAAAEuo/VLBJHNFGycwrMiPFhMHJy2JYaGxo_xpmwCLcBGAs/s1600/sword-of-destiny.jpg"
                        alt="Opis książki"/>
                    <img
                        src="https://th.bing.com/th/id/R.972a350b66aca649664803ca82769f70?rik=ufTdY%2bHqzFbB1g&pid=ImgRaw&r=0"
                        alt="book2"/>
                    <img
                        src="https://th.bing.com/th/id/OIP.b9iGpqjgfFN-8Ssf0plE0QAAAA?rs=1&pid=ImgDetMain"
                        alt="Opis książki"/>
                    <img
                        src="https://th.bing.com/th/id/OIP.pidsoK02BpY_XZ-_jvhvpAHaLL?rs=1&pid=ImgDetMain"
                        alt="book2"/>
                    <img
                        src="https://th.bing.com/th/id/R.8db5eca240935cb2a6656805b6cd02dd?rik=gaFZWf1I4AZAOg&pid=ImgRaw&r=0"
                        alt="Opis książki"/>
                    <img
                        src="https://i.thenile.io/r1000/9781473231115.jpg?r=5f351812ea51b"
                        alt="book2"/>
                    <img
                        src="https://th.bing.com/th/id/R.414921a7f9d8f801c43918cf7051e287?rik=chnDj8SUsO2eqQ&pid=ImgRaw&r=0"
                        alt="Opis książki"/>
                    <img
                        src="https://th.bing.com/th/id/OIP.x0R84Uu_DzJ1XbeOskXZnAHaLU?rs=1&pid=ImgDetMain"
                        alt="book2"/>
                    <img
                        src="https://th.bing.com/th/id/OIP.hFkaRKq9lN7d0Ah3lDfg8QAAAA?rs=1&pid=ImgDetMain"
                        alt="Opis książki"/>
                    <img
                        src="https://th.bing.com/th/id/OIP.lquziSMyKCRpXkb_obsM6AHaLd?rs=1&pid=ImgDetMain"
                        alt="book2"/>


                </div>

                <h2>Explore Our Exclusive Book Collection</h2>
                <p>Find your next favorite read with us. Choose from a variety of genres and authors.</p>
                <button>Start Browsing</button>
            </section>


            <div className="books-select">
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
                        bookId={book.book_id}
                        title={book.title}
                        author={book.author}
                        rating={book.rating}
                        image_path={book.image}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}

export default BookList;
