import React from 'react';
import './CommercialDrone.css';

const DroneFilming = () => (
    <div className="drone-section">
        <div className="container drone-content">
            <div className="image-wrapper">
                <img
                    src="/path-to-images/drone-filming.jpg"
                    alt="Drone Filming"
                    className="drone-image"
                />
            </div>
            <div className="text-wrapper">
                <h1 className="title">Drone Filming</h1>
                <p>
                    As a MA in filmmaking, I have the necessary knowledge and familiarity with all aspects and standards of work on a film set.
                </p>
                <p>
                    Drones reduce costs by replacing traditional methods such as helicopters or scaffolding, saving both time and money while delivering high-quality results.
                </p>
                <p>For filmmakers and content creators, drones offer unmatched versatility:</p>
                <ul>
                    <li>Smooth, cinematic shots that elevate storytelling.</li>
                    <li>Access to perspectives that were once impossible or expensive to achieve.</li>
                </ul>
                <p>
                    I use a DJI Mavic 3 Pro Cine, which supports Apple ProRes 422 HQ, Apple ProRes 422, and Apple ProRes 422 LT.
                    Apple ProRes is an industry standard high-quality video codec.
                </p>
            </div>
        </div>
    </div>
);

export default DroneFilming;
