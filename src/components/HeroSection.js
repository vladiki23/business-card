import React, { useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
    const [isLoading, setIsLoading] = useState(true); // Стейт для отслеживания загрузки

    // Обработчик для события начала воспроизведения видео
    const handleVideoLoaded = () => {
        setIsLoading(false); // Видео готово к воспроизведению, меняем состояние
    };

    return (
        <div className="hero-container">
            <div className="video-container">
                {/* Показываем индикатор загрузки, пока видео не загрузится */}
                {isLoading && (
                    <div className="loading-overlay">
                        <span>Loading...</span>
                    </div>
                )}
                <iframe
                    title="vimeo-background"
                    src="https://player.vimeo.com/video/1070058633?h=8fdb35769f&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="hero-video"
                    onCanPlayThrough={handleVideoLoaded} // Событие для видео, когда оно готово к воспроизведению
                />
            </div>
        </div>
    );
};

export default HeroSection;
























