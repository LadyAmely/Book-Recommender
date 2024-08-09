
import RecommendationCard from './RecommendationCard';
import './dashboard.css'
import Header from './Header';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



function Dashboard() {
    const recommendations = [
        { title: 'Book Title 1', author: 'Author Name', imgSrc: 'book1.jpg' },
        { title: 'Book Title 2', author: 'Author Name', imgSrc: 'book2.jpg' },
        { title: 'Book Title 3', author: 'Author Name', imgSrc: 'book3.jpg' },
    ];

    return (
        <div className="dashboard-main">
            <Header/>
            <main>
                <div className="container">
                    <section className="welcome">
                        <h2>Welcome, [User's Name]!</h2>
                        <p>Here are some personalized book recommendations for you:</p>
                    </section>
                </div>


            </main>

        </div>

    );
}

export default Dashboard;
