import React, { useState } from 'react';
import axios from 'axios';
import './register.css';
import Footer from './Footer';

function SignUp() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/api/users', { name, email, password })
            .then(response => {
                console.log(response.data);
                setName('');
                setEmail('');
                setPassword('');
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
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
                    </ul>
                </nav>
            </header>

            <div>



                <div className="registration-form">
                    <h1>Sign Up</h1>
                    <form onSubmit={handleSubmit}>

                        <label htmlFor="username">Username</label>
                        <input type="username" value={name} onChange={(e) => setName(e.target.value)}/>

                        <label htmlFor="email">Address Email</label>
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit">Submit</button>
                    </form>
                    <p>Have an account? <a href="/login">Sign In</a></p>


                </div>


            </div>


           <Footer/>
        </div>


    );

}

export default SignUp;
