import React, { useState } from 'react';
import axios from 'axios';
import './register.css';

function SignUp() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/api/users', { name, password })
            .then(response => {
                console.log(response.data);
                setName('');
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
                        <input type="email" id="email" name="email" required/>
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="confirm-password">Confirm password</label>
                        <input type="password" id="confirm-password" name="confirm-password" required/>
                        <button type="submit">Submit</button>
                    </form>
                    <p>Have an account? <a href="/login">Sign In</a></p>


                </div>


            </div>


            <footer>
                <p><a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms</a></p>
            </footer>
        </div>


    );

}

export default SignUp;
