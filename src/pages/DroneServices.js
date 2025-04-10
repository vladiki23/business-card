import React from 'react';
import { Link } from 'react-router-dom';
import './DroneServices.css';
import droneFilming from '../assets/drone-filming.webp';
import commercialDrone from '../assets/commercial-drone.webp';
import droneSurvey from '../assets/drone-survey.webp';
import realEstateDrone from '../assets/real-estate-drone.webp';

const services = [
    {
        id: 1,
        title: 'Drone Filming',
        path: '/drone-services/drone-filming',
        image: droneFilming,
    },
    {
        id: 2,
        title: 'Commercial Drone Services',
        path: '/drone-services/commercial-drone-services',
        image: commercialDrone,
    },
    {
        id: 3,
        title: 'Drone Survey',
        path: '/drone-services/drone-survey',
        image: droneSurvey,
    },
    {
        id: 4,
        title: 'Real Estate Drone Photography',
        path: '/drone-services/real-estate-drone-photography',
        image: realEstateDrone,
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








