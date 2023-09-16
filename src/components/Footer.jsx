import React from "react";
import '../components/Footer.css';

function Footer() {
    return (
        <div className="footer">
        <div className="mediaIcons"> 
        <i class="bi bi-facebook"></i>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-twitter"></i>
        <i class="bi bi-youtube"></i>
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