import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container d-flex justify-content-between align-items-center">
                {/* Копирайт слева */}
                <div className="footer-copyright">
                    <p className="mb-0">&copy; 2024 drone-pilot.co.uk. All Rights Reserved.</p>
                </div>

                {/* Контакты справа */}
                <div className="footer-contact text-end">
                    <h5>Contact Me</h5>
                    <p className="mb-1">Email: pro.dronepilot.uk@gmail.com</p>
                    <p>WhatsApp: +4474 939 12 469</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;



