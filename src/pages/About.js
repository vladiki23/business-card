import React from 'react';
import './About.css';
import profileImage from '../assets/profile.jpg'; // Укажите правильный путь к вашему изображению

const About = () => {
    return (
        <div className="about-container">
            <div className="about-content text-center py-5">
                {/* Круглая фотография */}
                <img src={profileImage} alt="Profile" className="about-image mb-4" />

                {/* Заголовок */}
                <h2 className="mb-3">I'm a freelance drone operator, video editor, and colourist based in London.</h2>

                {/* Описание */}
                <div className="about-description">
                    <p>
                        Practice makes it perfect! This expression is ideal for the filmmaking industry, as each project presents a unique experience, necessitating the search for new, creative ideas to implement the task and achieve the best result.
                    </p>
                    <p>
                        I have a master's degree in filmmaking from Goldsmiths University of London, but my path as a filmmaker began in 2018 after drones revolutionised aerial photography and videomaking. This ignited a new passion that blossomed into my most cherished career. After gaining extensive flying experience across various continents and experiencing the loss of several drones during my journey to become a pilot, my experience evolved into skills, leading to my certification and license to operate in the UK and Europe.
                    </p>
                    <p>
                        As a professional filmmaker, I have worked on various projects, from YouTube, TV series to creating my own short film in London. I familiar tit the all aspects of the industry, from the planning stage to the implementation of the final product. For me, every little detail is important when working on a project because it is the details that differentiate between good and unique.
                        By using my broad abilities and expertise, I can ensure that you, your clients, and your audience receive genuine value. I'll help you save time, achieve more, and increase engagement—smoothly!
                    </p>
                </div>

                {/* Социальные иконки */}
                <div className="about-social-links">
                    <a href="/about" className="me-3">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="/about" className="me-3">
                        <i className="bi bi-vimeo"></i>
                    </a>
                    <a href="/about">
                        <i className="bi bi-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;




