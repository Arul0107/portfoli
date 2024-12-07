import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import './Navbar.css'; // Custom styles for the Navbar
import logo from '../assets/images/logo.png';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    const handleMenuToggle = () => {
        setIsMobile(!isMobile); // Toggle the menu visibility
    };

    return (
        <header className="navbar">
            <div className="navbar-container">
                {/* Brand Logo */}
                <div className="navbar-logo">
                    <a href="#home">
                        <img src={logo} alt="logo" className="navbar-logo-img" />
                    </a>
                </div>

                {/* Navigation Menu */}
                <nav className={`navbar-menu ${isMobile ? 'show' : ''}`}>
                    <ul className="navbar-menu-items">
                        <li>
                            <Link 
                                to="home" // Target section ID
                                smooth={true} // Smooth scrolling
                                duration={1000} // Scroll duration in ms
                                offset={-70} // Adjust scroll offset if needed
                                className="navbar-link"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="portfolio"
                                smooth={true}
                                duration={1000}
                                offset={-70}
                                className="navbar-link"
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="skills"
                                smooth={true}
                                duration={1000}
                                offset={-70}
                                className="navbar-link"
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="about"
                                smooth={true}
                                duration={1000}
                                offset={-70}
                                className="navbar-link"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="contact"
                                smooth={true}
                                duration={1000}
                                offset={-70}
                                className="navbar-link"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Contact Button */}
                <div className={`navbar-contact-btn ${isMobile ? 'hide' : ''}`}>
                    <button className="navbar-theme-btn">Let's Talk</button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="navbar-mobile-menu-trigger" onClick={handleMenuToggle}>
                    <span className="navbar-burger-icon"></span>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
