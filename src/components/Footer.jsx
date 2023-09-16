import React from "react";
import '../components/Footer.css';

function Footer() {
    return (
        <div className="footer">
        <div className="mediaIcons"> 
        <i className="bi bi-facebook"></i>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-twitter"></i>
        <i className="bi bi-youtube"></i>
        </div>
        <div className="contentInfo">
            <p>Conditions of Use</p>
            <p>Privacy & Policy</p>
            <p>Press Room</p>
        </div>
        <p>&copy; 2021 MovieBox by Adriana Eka Prayudha</p>
        </div>
    )
}

export default Footer;