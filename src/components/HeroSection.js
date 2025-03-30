import React, { useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleVideoLoaded = () => {
        setIsLoading(false);
    };

    return (
        <div className="hero-container">
            <div className="video-container">
                {/* Индикатор загрузки */}
                {isLoading && (
                    <div className="loading-overlay">
                        <div className="loading-bars">
                            <div className="loading-bar"></div>
                            <div className="loading-bar"></div>
                            <div className="loading-bar"></div>
                            <div className="loading-bar"></div>
                        </div>
                    </div>
                )}
                <iframe
                    title="vimeo-background"
                    src="https://player.vimeo.com/video/1070058633?h=8fdb35769f&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="hero-video"
                    onLoad={handleVideoLoaded} // Событие срабатывает, когда видео загружено
                />
            </div>
        </div>
    );
};

export default HeroSection;


























