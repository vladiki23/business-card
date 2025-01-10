import React from 'react';
import './InfoSection.css';

const InfoSection = () => {
    return (
        <div className="container my-5">
            {/* Лицензия и контактная информация */}
            <div className="text-center mb-5">
                <h2>Fully CAA Licensed and Commercially Insured Pilot</h2>
                <p>Based in London. Licensed in the UK and EU.</p>
                <div className="d-flex justify-content-center mb-3 no-gutters">
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
                        alt="UK Flag"
                        className="flag-image"
                    />
                </div>
                <p>
                    <strong>WhatsApp:</strong> +4474 939 12 469<br/>
                    <strong>Email:</strong> pro.dronepilot.uk@gmail.com
                </p>
            </div>
        </div>
    );
};

export default InfoSection;



