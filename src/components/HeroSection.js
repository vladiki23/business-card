import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-container">
            <div className="video-container">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hero-video"
                >
                    <source src="/videos/hero-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default HeroSection;









































