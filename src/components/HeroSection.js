import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-container">
            <div className="video-wrapper">
                <iframe
                    title="vimeo-player"
                    src="https://player.vimeo.com/video/1070058633?h=8fdb35769f&autoplay=1&loop=1&background=1" // убрали muted=1
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="hero-video"
                ></iframe>
            </div>
        </div>
    );
};

export default HeroSection;






