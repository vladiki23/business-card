import React from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';  // Импортируем иконки
import './InfoSection.css';

const InfoSection = () => {
    return (
        <div className="flag-container my-5">
            {/* Лицензия и контактная информация */}
            <div className="text-center mb-5">
                <h2>Fully CAA Licensed and Commercially Insured Pilot</h2>
                <p>Based in London. Licensed in the UK and EU.</p>

                {/* Контейнер с флагами и логотипами */}
                <div className="flag-container mb-4">
                    <img
                        src="/path-to-images/uk-flag.png"
                        alt="UK Flag"
                        className="flag-image"
                    />
                    <img
                        src="/path-to-images/eu-flag.png"
                        alt="EU Flag"
                        className="flag-image"
                    />
                    <img
                        src="/path-to-images/easa-logo.png"
                        alt="EASA Logo"
                        className="flag-image"
                    />
                    <img
                        src="/path-to-images/images.jpg"
                        alt="EASA Logo"
                        className="flag-image"
                    />
                </div>

                {/* Контактная информация */}
                <p>
                    <strong>Contact Me:</strong>
                    <br/>
                    <FaWhatsapp /> WhatsApp: +4474 939 12 469
                    <br />
                    <FaEnvelope /> Email: pro.dronepilot.uk@gmail.com
                </p>
            </div>
        </div>
    );
};

export default InfoSection;


