import React, { useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
    const [playWithSound, setPlayWithSound] = useState(false);

    const handlePlayClick = () => {
        setPlayWithSound(true);
    };

    return (
        <div className="hero-container">
            <div className="video-container">
                <iframe
                    src={
                        playWithSound
                            ? "https://player.vimeo.com/video/1070058633?h=8fdb35769f&autoplay=1&loop=1"
                            : "https://player.vimeo.com/video/1070058633?h=8fdb35769f&autoplay=1&muted=1&loop=1&background=1"
                    }
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title="Vimeo Video"
                ></iframe>

                {!playWithSound && (
                    <button className="sound-button" onClick={handlePlayClick}>
                        🔊 Включить звук
                    </button>
                )}
            </div>
        </div>
    );
};

export default HeroSection;


































