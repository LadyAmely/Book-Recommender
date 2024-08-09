
import './dashboard.css'
import Header from './Header';
import React from 'react';

function Dashboard() {
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
