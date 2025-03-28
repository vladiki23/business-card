import React from 'react';
import './Editing.css';

const Editing = () => {
    return (
        <div className="editing-container">
            <div className="container py-5">
                <h1 className="text-center mb-5">Editing Services</h1>
                <div className="editing-content">
                    <div className="row align-items-center">
                        {/* Изображение слева */}
                        <div className="col-md-6">
                            <div className="editing-video-wrapper">
                                <iframe
                                    src="https://player.vimeo.com/video/1070117589?h=42382214a9"
                                    title="Editing Video"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        {/* Описание справа */}
                        <div className="col-md-6">
                            <p>
                                <span className="highlight">Colour grading</span> is one of the most important processes
                                in creating a memorable image. Whether you're aiming for a warm, nostalgic feel or a
                                cold, dramatic look, color grading elevates the visual storytelling and ensures the
                                final product matches the creative vision—it is what makes videos shine.
                            </p>
                            <p>
                                I can <span className="highlight">highlight the sky, the grass, your product, or your wedding dress</span>.
                                I use specialized tools to subtly focus the audience's attention at any point in the
                                frame.
                            </p>
                            <p>
                                Colour grading not only brings everything together to make it seem consistent and
                                visually appealing, but it also gives it an exhilarating boost towards the high end.
                            </p>
                            <p>
                                I have over 10 years of video editing and colour grading experience, cutting music
                                videos, documentary projects, and TV commercials.
                            </p>
                            <p>
                                As I work remotely, you will just need to upload high-res footage and transfer it to me.
                                I'll create a stress-free workflow that works for you—keeping your project on time and
                                on budget.
                            </p>
                            <p>
                                I am <span className="highlight">flexible and customer-focused</span>, so don't hesitate
                                to drop me a message to discuss projects of any scale. I'll give you an immediate quote
                                and a breakdown of the workflow.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Editing;


