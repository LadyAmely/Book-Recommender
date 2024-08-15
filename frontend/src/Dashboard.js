
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


    useEffect(() => {
        axios.get('http://localhost:8081/preferences-books/all')
            .then(response => {
                setBooks(response.data);

            })
            .catch(error => {
                console.error('There was an error fetching the books!', error);
            });
    }, []);
    return (
        <div className="dashboard-main">
            <Header/>
            <main>
                <div className="container">
                    <section className="welcome">
                        <h2>Welcome, !</h2>
                        <p>Here are some personalized book recommendations for you:</p>
                    </section>
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
            </main>
        </div>
    );
}

export default Dashboard;
