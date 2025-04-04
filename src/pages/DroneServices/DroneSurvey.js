import React from 'react';
import './CommercialDrone.css'; // общий CSS-файл для всех сервисов

const DroneSurvey = () => (
    <div className="drone-section">
        <div className="container drone-content">
            <div className="image-wrapper">
                <img
                    src="/path-to-images/drone-survey.jpeg"
                    alt="Drone Survey"
                    className="drone-image"
                />
            </div>
            <div className="text-wrapper">
                <h1 className="title">Drone Survey</h1>
                <p>
                    Drones are especially beneficial for constructions and roof inspections, providing a safer, faster,
                    more efficient, and cost-effective alternative to traditional methods.
                </p>
                <p>Key benefits:</p>
                <ul>
                    <li>Minimized Risk</li>
                    <li>High-Resolution Imagery</li>
                    <li>Reduced Labor Costs</li>
                </ul>
            </div>
        </div>
    </div>
);

export default DroneSurvey;