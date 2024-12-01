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
        <header className="site-header">
            <div className="container">
                {/* Brand Logo */}
                <div className="brand-logo">
                    <a href="#home">
                        <img src={logo} alt="logo" className="logo" />
                    </a>
                </div>

                {/* Menu */}
                <nav className={`menu ${isMobile ? 'show' : ''}`}>
                    <ul className="menu-items">
                        <li>
                            <Link 
                                to="home" // Target section ID
                                smooth={true} // Smooth scrolling
                                duration={1000} // Scroll duration in ms
                                offset={-70} // Adjust scroll offset if needed
                                className="nav-link"
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
                                className="nav-link"
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="services"
                                smooth={true}
                                duration={1000}
                                offset={-70}
                                className="nav-link"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="about"
                                smooth={true}
                                duration={1000}
                                offset={-70}
                                className="nav-link"
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
                                className="nav-link"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Let's Talk Button */}
                <div className={`contact-btn ${isMobile ? 'hide' : ''}`}>
                    <button className="theme-btn">Let's Talk</button>
                </div>

                {/* Mobile menu toggle */}
                <div className="mobile-menu-trigger" onClick={handleMenuToggle}>
                    <span className="burger-icon"></span>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
