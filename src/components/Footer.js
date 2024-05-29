import React from 'react';
import "../components/styles/Footer.css";
import Logo from "../components/assets/logo.png";

export default function Footer() {
    return (
        <div>
            <div className="footer-background">
                <div className="footer-container">
                    <img src={Logo} alt="Little Lemon logo" />
                    <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally sourced menu with daily specials.</p>
                    <div className="footer-content">
                        <div className="locations">
                            <h5>LOCATIONS</h5>
                            <ul>
                                <li>Montreal, Canada</li>
                                <li>Chicago, IL</li>
                                <li>New York City, NY</li>
                                <li>Austin, TX</li>
                            </ul>
                        </div>
                        <div className="opening-times">
                            <h5>OPENING TIMES</h5>
                            <ul>
                                <li>Monday - Friday: 11:00 - 22:00</li>
                                <li>Sat: 10:00 - 00:00</li>
                                <li>Closed on Sundays</li>
                            </ul>
                        </div>
                        <div className="contact">
                            <h5>CONTACT US</h5>
                            <ul>
                                <li>456 Lemons Avenue</li>
                                <li>Saint Paul, MN 55107</li>
                                <li>Tel: 651-123-4567</li>
                                <li>Email: info@littlelemon.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>© 2024 Little Lemon Ltd | Mai Yang</p>
                    </div>
                </div>
            </div>
        </div>
    );
}