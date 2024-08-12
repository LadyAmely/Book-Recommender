
import './dashboard.css'
import Header from './Header';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';


function Dashboard() {

    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    const [name, setName] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8081/api/getAll')
            .then(response => {
                setName(response.data);
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
            </main>
        </div>
    );
}

export default Dashboard;
