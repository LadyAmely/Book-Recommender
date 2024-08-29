import React from "react";
import Footer from './Footer';
import Header from './Header';
import "./contact.css";
import myPhoto from "./CV-photo.jpg";

function Contact(){

    return(

        <div>
            <Header/>

            <section id="contact">
                <div className="contact-photo">
                    <img src={myPhoto} alt="Moje zdjęcie" className="profile-pic"/>
                </div>
                <div className="contact-card">
                    <div className="contact-details">
                        <h2>About me</h2>
                        <p>I am a passionate student specializing in mobile and web application development, with
                            expertise in technologies like React.js, Next.js, Spring Boot, and Android Studio. My
                            passion is transforming ideas into functional and user-friendly applications. I would be
                            happy to use my skills and enthusiasm to contribute to innovative projects.</p>
                        <ul>
                            <li>LinkedIn: <a href=""
                                             target="_blank">linkedin.com/in/amelia</a></li>
                        </ul>
                    </div>

                </div>

            </section>
            <section id="contact">
                <div className="contact-photo">

                </div>
                <div className="contact-card">
                    <div className="contact-details">
                        <h2>About project</h2>
                        <p>A web application designed for book lovers. It features a sophisticated recommendation system
                            that personalizes book suggestions based on your reading preferences and history. Users can
                            easily browse an extensive catalog of books with advanced search filters and detailed
                            information.</p>
                    </div>

                </div>

            </section>


            <Footer/>
        </div>

    );


}

export default Contact;