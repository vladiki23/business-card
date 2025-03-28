import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { TbDrone } from "react-icons/tb"; // Используем иконку самолета (или другую подходящую)
import Contact from '../pages/Contact';

const Header = () => {
    const [showContactModal, setShowContactModal] = useState(false);
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

    const handleOpenModal = () => {
        setShowContactModal(true);
    };

    const handleCloseModal = () => {
        setShowContactModal(false);
    };

    const handleNavLinkClick = () => {
        setIsNavbarCollapsed(true);
        const collapseElement = document.getElementById('navbarNav');
        if (collapseElement.classList.contains('show')) {
            collapseElement.classList.remove('show');
        }
    };

    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <Link className="navbar-brand logo-text"  to="/" onClick={handleNavLinkClick}>
                        <TbDrone style={{ marginRight: '8px', fontSize: '1.2rem', verticalAlign: '-2px'}} /> {/* Иконка рядом с текстом */}
                        DRONE-PILOT.CO.UK
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded={!isNavbarCollapsed}
                        aria-label="Toggle navigation"
                        onClick={() => setIsNavbarCollapsed(!isNavbarCollapsed)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${!isNavbarCollapsed ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/" onClick={handleNavLinkClick}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/drone-services" onClick={handleNavLinkClick}>
                                    Drone Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/editing" onClick={handleNavLinkClick}>
                                    Editing
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" onClick={handleNavLinkClick}>
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/faq" onClick={handleNavLinkClick}>
                                    FAQ
                                </Link>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="nav-link btn btn-link text-info"
                                    onClick={() => {
                                        handleOpenModal();
                                        handleNavLinkClick();
                                    }}
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {showContactModal && <Contact onClose={handleCloseModal} />}
        </header>
    );
};

export default Header;












