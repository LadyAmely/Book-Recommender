
import './dashboard.css'
import Header from './Header';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import FavouriteBook from './FavouriteBook';

function Dashboard() {

    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    const [books, setBooks] = useState([]);
    const [topRatedBooks, setTopRatedBooks] = useState([]);
    const [recommendedBooks, setRecommendedBooks] = useState([]);


    useEffect(() =>{

        axios.get('http://localhost:8081/books/recommendations')
            .then(response =>{
                setRecommendedBooks(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the books!', error);
            });
    })

    useEffect(() => {
        axios.get('http://localhost:8081/preferences-books/all')
            .then(response => {
                setBooks(response.data);

            })
            .catch(error => {
                console.error('There was an error fetching the books!', error);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8081/books')
            .then(response => {
                const sortedBooks = response.data.sort((a, b) => b.rating - a.rating);
                setTopRatedBooks(sortedBooks.slice(0, 10)); // Select top 10 books by rating
            })
            .catch(error => {
                console.error('There was an error fetching the top-rated books!', error);
            });
    }, []);


    return (
        <div className="dashboard-main">
            <Header/>
            <main>
                <div className="container">
                    <section className="profile">
                        <h2>Welcome, !</h2>
                        <p>Here are some personalized book recommendations for you:</p>
                    </section>
                </div>

                <section className="top-rated-books">
                    <h3>Top 10 rated books</h3>
                    <div className="books-grid">
                        {topRatedBooks.map(book => (
                            <FavouriteBook
                                title={book.bookTitle}
                                author={book.author}
                                rating={book.rating}
                                image_path={book.image}

                            />
                        ))}

                    </div>


                </section>

                <section className="favorites">
                    <h3>Your Favorite Books</h3>
                    <div className="books-grid">
                        {books.map(book => (
                            <FavouriteBook
                                title={book.bookTitle}
                                author={book.author}
                                rating={book.rating}
                                image_path={book.image}

                            />
                        ))}


                    </div>
                </section>


                <section className="recommended-books">
                    <h3>Recommendations for you</h3>
                    <div className="books-grid">
                        {recommendedBooks.map(book =>(
                            <FavouriteBook
                                title={book.bookTitle}
                                author={book.author}
                                rating={book.rating}
                                image_path={book.image}

                            />
                        ))}

                    </div>
                </section>
            </main>

            <footer>
                <p>&copy; 2024 Book Recommender. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Dashboard;
