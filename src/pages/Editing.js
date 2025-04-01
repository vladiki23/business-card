import React from 'react';
import './Editing.css';

const Editing = () => {
    return (
        <div className="editing-container">
            <div className="container py-5">
                <h1 className="text-center mt-3 highlighted-title">Editing Services</h1>
                <div className="editing-content">
                    {/* Блок с видео */}
                    <div className="editing-video-wrapper">
                        <iframe
                            src="https://player.vimeo.com/video/1070117589?h=42382214a9"
                            title="Editing Video 1"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <iframe
                            src="https://player.vimeo.com/video/1070441544?h=139ac1cb11"
                            title="Editing Video 2"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <iframe
                            src="https://player.vimeo.com/video/1070439941?h=2f39629368"
                            title="Editing Video 2"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Блок с текстом */}
                    <div className="editing-text-wrapper">
                        <p className="highlighted-title">
                            Bringing Your Story to Life with Colour, Sound & Emotion
                        </p>
                        <p>
                            Editing is where the magic happens—it’s the process that transforms raw footage into a
                            compelling story. Every cut, transition, and frame shapes the narrative, creates rhythm, and
                            keeps the audience engaged.
                        </p>
                        <p>
                            Great editing isn’t just about seamless cuts; it’s about storytelling. I craft each moment
                            with precision, ensuring the pacing flows naturally, emotions land at the right time, and
                            every shot serves a purpose.
                        </p>
                        <p>
                            Colour grading enhances this by setting the tone—whether it’s a warm, nostalgic glow or a
                            bold, cinematic look, it brings cohesion and depth to every frame. Meanwhile, sound design
                            ties everything together, refining dialogue, balancing music, and adding the subtle details
                            that make any project feel truly immersive.
                        </p>
                        <p>
                            With a sharp eye for detail and a passion for storytelling, I bring footage to life—turning
                            ideas into powerful, polished visuals that leave a lasting impact.
                        </p>
                        <p className="highlighted-title">
                            Experience & Workflow
                        </p>
                        <p>
                            With over 10 years of experience in video editing and colour grading, I’ve worked on music
                            videos, documentary projects, and TV commercials.
                        </p>
                        <p>
                            I work remotely, making the process seamless—simply upload your high-res footage, and I’ll
                            handle the rest. My efficient workflow ensures your project stays on time and within budget.
                        </p>
                        <p>
                            I’m <span>flexible and customer-focused</span>, so feel free to reach
                            out to discuss projects of any scale. I’ll provide an immediate quote and a clear breakdown
                            of the workflow.
                        </p>
                        <p>
                            More references by request.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Editing;













