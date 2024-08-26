
import './dashboard.css'
import Header from './Header';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import FavouriteBook from './FavouriteBook';
import Footer from './Footer';

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

                <section className="top-rated-books">

                    <div className="section">
                        <h3>Top 10 rated books</h3>
                    </div>

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
                    <div className="section">
                        <h3>Your Favorite Books</h3>
                    </div>

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
                    <div className="section">
                        <h3>Recommendations for you</h3>
                    </div>

                    <div className="books-grid">
                        {recommendedBooks.map(book => (
                            <FavouriteBook
                                title={book.bookTitle}
                                author={book.author}
                                rating={book.rating}
                                image_path={book.image}

                            />
                        ))}

                    </div>
                </section>


        <Footer/>
        </div>
    );
}

export default Dashboard;
