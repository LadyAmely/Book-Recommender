import React from 'react';
import './header.css';
import { AuthProvider, useAuth } from './AuthContext';
import {useNavigate} from "react-router-dom";

function Header() {

    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };


    return (

    <div>
        <header>
            <nav>
                <a href="/" className="logo">Book Recommender</a>
                <ul>
                    <li><a href="/home">Home Page</a></li>
                    <li><a href="/books">Book Catalog</a></li>
                    <li><a href="/contact">Contact</a></li>
                    {isAuthenticated && <li><a href="/" onClick={handleLogout}>Logout</a></li>}
                </ul>
            </nav>
        </header>
    </div>
)
    ;
}

export default Header;
