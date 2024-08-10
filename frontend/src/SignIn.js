import React, { useState, useEffect } from "react";
import axios from 'axios';

import "./register.css";

function SignIn() {

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
                    <form>
                        <label htmlFor="username">Username</label>
                        <input type="username" id="username" name="username" required/>

                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required/>

                        <button type="submit">Submit</button>
                    </form>

                    <p>Don't have an account? <a href="/register">Sign Up</a></p>


                </div>


            </div>


            <footer>
                <p><a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms</a></p>
            </footer>
        </div>


    )
        ;
}


export default SignIn;
