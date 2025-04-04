import React from 'react';
import './CommercialDrone.css'; // общий CSS

const RealEstateDronePhotography = () => (
    <div className="drone-section">
        <div className="container drone-content">
            <div className="image-wrapper">
                <img
                    src="/path-to-images/real-estate-drone.png"
                    alt="Real Estate Drone Photography"
                    className="drone-image"
                />
            </div>
            <div className="text-wrapper">
                <h1 className="title">Real Estate Drone Photography</h1>

                <p><strong>Enhanced Property Marketing</strong></p>
                <p>
                    Drones have become an invaluable tool in the real estate industry, revolutionizing the way
                    properties are marketed, evaluated, and managed. From capturing stunning aerial imagery to providing
                    detailed property assessments, drones offer several benefits for real estate professionals.
                </p>

                <p><strong>Stunning Aerial Photography and Videography</strong></p>
                <ul>
                    <li>
                        <strong>High-Quality Visuals:</strong> Drones provide breathtaking aerial footage and
                        high-resolution images, which can showcase a property from unique angles and perspectives that
                        traditional photography can't match. This is especially beneficial for large estates, commercial
                        properties, or developments with expansive outdoor areas.
                    </li>
                    <li>
                        <strong>Visual Appeal:</strong> Aerial shots highlight the property's location, surrounding
                        areas, and landscaping, helping potential buyers see the full context and value of the property.
                        It can also show proximity to landmarks, parks, schools, or key amenities.
                    </li>
                </ul>

                <p><strong>Virtual Tours:</strong> Drones can be used to create interactive virtual tours, giving
                    potential buyers or tenants an immersive experience of the property. This can be particularly
                    valuable for remote buyers or those unable to visit the property in person.</p>

                <p><strong>Live streaming:</strong> Offers real estate professionals a dynamic way to showcase
                    properties from unique aerial perspectives. It enhances listings with high-quality, real-time video,
                    allowing potential buyers to experience the property remotely and gain a comprehensive view of the
                    surrounding area.</p>
            </div>
        </div>
    </div>
);

export default RealEstateDronePhotography;

