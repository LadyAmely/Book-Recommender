import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Footer from './Footer';

import "./register.css";

function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8081/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (data.message === "Login successful") {
                login();
                navigate('/home');
            } else {
                setMessage("bad password or email");
            }
        } catch (error) {
            console.error("Error during login:", error);
            setMessage("An error occurred during login.");
        }
    };

    return(

        <div>

            <header>
                <nav>
                    <a href="/" className="logo">Book Recommender</a>
                    <ul>
                        <li><a href="/home">Home Page</a></li>
                        <li><a href="/books">Book Catalog</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <div>


                <div className="registration-form">
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="password">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                        <button type="submit">Submit</button>
                    </form>
                    {message && <p>{message}</p>}

                    <p>Don't have an account? <a href="/register">Sign Up</a></p>


                </div>


            </div>


          <Footer/>
        </div>


    )
        ;
}


export default SignIn;
