import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Contact from '../pages/Contact'; // Импортируем модальное окно

const Header = () => {
    const [showContactModal, setShowContactModal] = useState(false);

    const handleOpenModal = () => {
        setShowContactModal(true);
    };

    const handleCloseModal = () => {
        setShowContactModal(false);
    };

    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg bg-primary.bg-transparent fixed-top">
                <div className="container">
                    <Link className="navbar-brand logo-text" to="/">
                        DRONE-PILOT.CO.UK
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/drone-services">
                                    Drone Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/editing">
                                    Editing
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/faq">
                                    FAQ
                                </Link>
                            </li>
                            {/* Изменяем Contact на кнопку, которая открывает модальное окно */}
                            <li className="nav-item">
                                <button
                                    className="nav-link btn btn-link"
                                    onClick={handleOpenModal}
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Модальное окно Contact */}
            {showContactModal && <Contact onClose={handleCloseModal} />}
        </header>
    );
};

export default Header;







