import React, { useRef, useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
    const videoRef = useRef(null);
    const [muted, setMuted] = useState(true);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setMuted(videoRef.current.muted);
        }
    };

    // Убедимся, что видео изначально отключено
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true;
        }
    }, []);

    return (
        <div className="hero-container">
            <div className="video-container">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hero-video"
                >
                    <source src="/videos/hero-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <button className="sound-button" onClick={toggleMute}>
                    {muted ? 'Unmute' : 'Mute'}
                </button>
            </div>
        </div>
    );
};

export default HeroSection;










































