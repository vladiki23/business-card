import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-container">
            <div className="video-container">
                <iframe
                    title="vimeo-background"
                    src="https://player.vimeo.com/video/1070058633?h=8fdb35769f&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="hero-video"
                />
            </div>
        </div>
    );
};

export default HeroSection;






















