import React, { useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';
import './HeroSection.css';

const HeroSection = () => {
    const iframeRef = useRef(null);
    const [player, setPlayer] = useState(null);
    const [muted, setMuted] = useState(true);

    useEffect(() => {
        if (iframeRef.current) {
            const vimeoPlayer = new Player(iframeRef.current, {
                id: 1070058633,
                autoplay: true,
                muted: true,
                loop: true,
                background: true,
            });

            vimeoPlayer.ready().then(() => {
                setPlayer(vimeoPlayer);
                setMuted(true); // устанавливаем в true для корректного старта
            });
        }
    }, []);

    const toggleMute = async () => {
        if (!player) return;

        const isMuted = await player.getMuted();
        if (isMuted) {
            await player.setMuted(false);
            setMuted(false);
        } else {
            await player.setMuted(true);
            setMuted(true);
        }
    };

    return (
        <div className="hero-container">
            <div className="video-container">
                <iframe
                    ref={iframeRef}
                    src="https://player.vimeo.com/video/1070089100?background=1&autoplay=1&muted=1&loop=1"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title="Vimeo Video"
                ></iframe>

                <button className="sound-button" onClick={toggleMute}>
                    {muted ? 'Unmute' : 'Mute'}
                </button>
            </div>
        </div>
    );
};

export default HeroSection;






































