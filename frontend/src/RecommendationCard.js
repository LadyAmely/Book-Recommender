import React from 'react';
import './dashboard.css';

function RecommendationCard({ title, author, imgSrc }) {
    return (
        <div className="card">
            <h4>{title}</h4>
            <p>{author}</p>
            <button>More Info</button>
        </div>
    );
}

export default RecommendationCard;
