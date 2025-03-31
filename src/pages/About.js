import React from 'react';
import './About.css';
import profileImage from '../assets/profile.jpg'; // Укажите правильный путь к вашему изображению

const About = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                {/* Блок с текстом */}
                <div className="about-text">
                    <h1 className="about-heading">About Me</h1>
                    <p>
                        I’m a freelance drone operator, video editor, and colourist based in London.
                    </p>
                    <p>
                        Practice makes perfect! This saying couldn’t be more fitting for the filmmaking industry, where every project is a unique challenge that demands creativity, precision, and a fresh perspective to achieve the best results.
                    </p>
                    <p>
                        I hold a master’s degree in filmmaking from Goldsmiths, University of London, but my journey as a filmmaker truly began in 2018 when drones revolutionised aerial cinematography. What started as a fascination quickly grew into a passion, shaping my career. Through extensive flying experience across multiple continents—and even losing a few drones along the way—I developed the skills and expertise that led to my certification and licensing to operate in the UK and Europe.
                    </p>
                    <p>
                        As a professional filmmaker, I’ve worked on a wide range of projects, from YouTube content and TV series to producing my own short films in London. My most notable work, Romchyk, has received critical acclaim, screening at multiple international film festivals. A defining moment of my career was presenting Romchyk at the Vatican, where it was personally shown to Pope Francis as part of a global discussion on children’s rights.
                    </p>
                    <p>
                        I’m well-versed in every stage of production, from initial planning to the final polished product. For me, attention to detail is key—it’s the small elements that turn a good project into something truly exceptional.
                    </p>
                    <p>
                        With my expertise in drone operation, editing, and colour grading, I help creators and businesses elevate their content. My goal is to ensure that you, your clients, and your audience receive real value—saving you time, increasing engagement, and delivering high-quality results effortlessly.
                    </p>
                </div>
                {/* Блок с изображением */}
                <div className="about-image-wrapper">
                    <img src={profileImage} alt="Profile" className="about-image" />
                </div>
            </div>
        </div>
    );
};

export default About;






