import React from 'react';
import './CommercialDrone.css'; // общий стиль

const CommercialDroneServices = () => (
    <div className="drone-section">
        <div className="container drone-content">
            <div className="image-wrapper">
                <img
                    src="/path-to-images/commercial-drone.jpg"
                    alt="Commercial Drone"
                    className="drone-image"
                />
            </div>
            <div className="text-wrapper">
                <h1 className="title">Commercial Drone Services</h1>
                <p>
                    In today’s fast-paced, visually driven world, drones have revolutionised how businesses operate, market, and grow.
                </p>
                <p>
                    From stunning aerial photography to streamlining complex operations, drones bring unparalleled efficiency, creativity, and insight to commercials.
                </p>
            </div>
        </div>
    </div>
);

export default CommercialDroneServices;


