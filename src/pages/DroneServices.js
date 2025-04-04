import React from 'react';
import { Link } from 'react-router-dom';
import './DroneServices.css';

const services = [
    {
        id: 1,
        title: 'Drone Filming',
        path: '/drone-services/DroneFilming',
        image: '/path-to-images/drone-filming.jpg',
    },
    {
        id: 2,
        title: 'Commercial Drone Services',
        path: '/drone-services/CommercialDroneServices',
        image: '/path-to-images/commercial-drone.jpg',
    },
    {
        id: 3,
        title: 'Drone Survey',
        path: '/drone-services/dronesurvey',
        image: '/path-to-images/drone-survey.jpeg',
    },
    {
        id: 4,
        title: 'Real Estate Drone Photography',
        path: '/drone-services/RealEstateDronePhotography',
        image: '/path-to-images/real-estate-drone.png',
    },
];

const DroneServices = () => {
    return (
        <div className="drone-services-container">
            <div className="container py-5">
                <h1 className="text-center mb-5">Drone Services</h1>
                <div className="row d-flex justify-content-center">
                    {services.map((service) => (
                        <div key={service.id} className="col-md-5 mb-4">
                            <Link to={service.path} className="service-card-link">
                                <div className="service-card">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="img-fluid service-image"
                                    />
                                    <h3 className="service-title">{service.title}</h3>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DroneServices;







