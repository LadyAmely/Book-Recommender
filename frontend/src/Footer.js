import React from "react";
import './footer.css';


function Footer(){

    return (
        <div className="dark-gradient-footer">
            <div className="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Support</a>
            </div>
            <div className="social-icons">
                <a href="#facebook" title="Facebook">F</a>
                <a href="#instagram" title="Instagram">I</a>
                <a href="#linkedin" title="LinkedIn">L</a>
            </div>
            <div className="footer-note">
                &copy; 2024 LadyAmely. All rights reserved.
            </div>
        </div>
    );
}

export default Footer;