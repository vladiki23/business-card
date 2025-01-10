import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-container">
            {/* Видео на фоне */}
            <video autoPlay loop muted className="hero-video">
                <source src="/video/background.mp4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default HeroSection;

