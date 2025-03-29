import React from 'react';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa'; // Импортируем иконки

const Footer = () => {
    return (
        <footer className="bg-dark py-4">
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
                {/* Копирайт слева */}
                <div className="footer-copyright">
                    <p className="mb-0">&copy; 2024 drone-pilot.co.uk. All Rights Reserved.</p>
                </div>

                {/* Контакты справа */}
                <div className="footer-contact text-center text-md-end">
                    <h5>Contact Me</h5>
                    <div className="footer-icons mb-2 footer">
                        <p className="mb-1">
                            <FaEnvelope /> <span>pro.dronepilot.uk@gmail.com</span>
                        </p>
                        <p>
                            <FaWhatsapp /> <span>+4474 939 12 469</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;




