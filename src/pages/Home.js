import React from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';
import Divider from '../components/Divider';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <Divider />
            <InfoSection />
            <Divider />
            <FaqSection />
            <Divider />
        </div>
    );
};

export default Home;




