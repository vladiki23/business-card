import React, { useState } from 'react';
import './DroneServices.css';

const DroneServices = () => {
    const services = [
        {
            id: 1,
            title: 'Drone Filming',
            content: `
        As a MA in filmmaking, I have the necessary knowledge and familiarity with all aspects and standards of work on a film set.

        Drones reduce costs by replacing traditional methods such as helicopters or scaffolding, saving both time and money while delivering high-quality results. 
        For filmmakers and content creators, drones offer unmatched versatility:
        - Smooth, cinematic shots that elevate storytelling.
        - Access to perspectives that were once impossible or expensive to achieve.

        I use a DJI Mavic 3 Pro Cine, which supports Apple ProRes 422 HQ, Apple ProRes 422, and Apple ProRes 422 LT. Apple ProRes is an industry standard high-quality video codec.
      `,
            image: '/path-to-images/drone-filming.jpg',
        },
        {
            id: 2,
            title: 'Commercial Drone Services',
            content: `
        In today’s fast-paced, visually driven world, drones have revolutionised how businesses operate, market, and grow. From stunning aerial photography to streamlining complex operations, drones bring unparalleled efficiency, creativity, and insight to commercials.
      `,
            image: '/path-to-images/commercial-drone.jpg',
        },
        {
            id: 3,
            title: 'Drone Survey',
            content: `
        Drones are especially beneficial for constructions and roof inspections, providing a safer, faster, more efficient, and cost-effective alternative to traditional methods.

        Key benefits:
        - Minimized Risk
        - High-Resolution Imagery
        - Reduced Labor Costs
      `,
            image: '/path-to-images/drone-survey.jpeg',
        },
        { id: 4, title: 'Real Estate Drone Photography', content: 'Enhanced Property Marketing \n' +
                'Drones have become an invaluable tool in the real estate industry, revolutionizing the way properties are marketed, evaluated, and managed. From capturing stunning aerial imagery to providing detailed property assessments, drones offer several benefits for real estate professionals\n' +
                'Stunning Aerial Photography and Videography\n' +
                'High-Quality Visuals: Drones provide breathtaking aerial footage and high-resolution images, which can showcase a property from unique angles and perspectives that traditional photography can\'t match. This is especially beneficial for large estates, commercial properties, or developments with expansive outdoor areas.\n' +
                'Visual Appeal: Aerial shots highlight the property\'s location, surrounding areas, and landscaping, helping potential buyers see the full context and value of the property. It can also show proximity to landmarks, parks, schools, or key amenities.\n' +
                'Virtual Tours: Drones can be used to create interactive virtual tours, giving potential buyers or tenants an immersive experience of the property. This can be particularly valuable for remote buyers or those unable to visit the property in person.\n' +
                'Live streaming: Offers real estate professionals a dynamic way to showcase properties from unique aerial perspectives. It enhances listings with high-quality, real-time video, allowing potential buyers to experience the property remotely and gain a comprehensive view of the surrounding area.', image: '/path-to-images/real-estate-drone.jpg' },
    ];

    const [openTabs, setOpenTabs] = useState([]);
    const [activeTab, setActiveTab] = useState(null);

    const openTab = (service) => {
        if (!openTabs.find((tab) => tab.id === service.id)) {
            setOpenTabs([...openTabs, service]);
        }
        setActiveTab(service.id);
    };

    const closeTab = (id) => {
        const updatedTabs = openTabs.filter((tab) => tab.id !== id);
        setOpenTabs(updatedTabs);
        setActiveTab(updatedTabs.length > 0 ? updatedTabs[0].id : null);
    };

    return (
        <div className="drone-services-container">
            <div className="container py-5">
                <h1 className="text-center mb-5">Drone Services</h1>

                {openTabs.length > 0 && (
                    <div className="tabs-container">
                        <div className="tabs">
                            {openTabs.map((tab) => (
                                <div
                                    key={tab.id}
                                    className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    <span>{tab.title}</span>
                                    <button
                                        className="close-tab"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            closeTab(tab.id);
                                        }}
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="tab-content">
                            {openTabs.find((tab) => tab.id === activeTab) && (
                                <div className="tab-details">
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <img
                                                src={openTabs.find((tab) => tab.id === activeTab).image}
                                                alt={openTabs.find((tab) => tab.id === activeTab).title}
                                                className="img-fluid tab-image"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <p className="details-text">
                                                {openTabs.find((tab) => tab.id === activeTab).content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                <div className="row">
                    {services.map((service) => (
                        <div key={service.id} className="col-md-4 mb-4">
                            <div className="service-card" onClick={() => openTab(service)}>
                                <img src={service.image} alt={service.title} className="img-fluid service-image" />
                                <h3 className="service-title">{service.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DroneServices;






