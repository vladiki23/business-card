import React, { useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';
import './HeroSection.css';

const HeroSection = () => {
    const iframeRef = useRef(null);
    const [player, setPlayer] = useState(null);
    const [soundOn, setSoundOn] = useState(false);

    useEffect(() => {
        if (iframeRef.current && !player) {
            const vimeoPlayer = new Player(iframeRef.current, {
                id: 1070058633,
                autoplay: true,
                muted: true,
                loop: true,
                background: true,
            });

            setPlayer(vimeoPlayer);
        }
    }, [player]);

    const enableSound = async () => {
        if (player) {
            await player.setMuted(false);
            await player.play();
            setSoundOn(true);
        }
    };

    return (
        <div className="hero-container">
            <div className="video-container">
                <iframe
                    ref={iframeRef}
                    src="https://player.vimeo.com/video/1070058633?background=1&autoplay=1&muted=1&loop=1"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title="Vimeo Video"
                ></iframe>

                {!soundOn && (
                    <button className="sound-button" onClick={enableSound}>
                        🔊 Включить звук
                    </button>
                )}
            </div>
        </div>
    );
};

export default HeroSection;




































