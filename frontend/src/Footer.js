import React from "react";
import './footer.css';


function Footer(){

    return (
        <div className="dark-gradient-footer">
            <p>&copy; 2024 Lady Amely. All rights reserved</p>
            <div className="social-icons">
                <a href="#facebook" title="Facebook">F</a>
                <a href="#instagram" title="Instagram">I</a>
                <a href="#linkedin" title="LinkedIn">L</a>
            </div>
        </div>
    );
}

export default Footer;