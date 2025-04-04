import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'; // Импортируем Framer Motion для анимаций
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import DroneServices from './pages/DroneServices';
import DroneFilming from './pages/DroneServices/DroneFilming';
import CommercialDrone from './pages/DroneServices/CommercialDroneServices';
import DroneSurvey from './pages/DroneServices/DroneSurvey';
import RealEstate from './pages/DroneServices/RealEstateDronePhotography';
import Editing from './pages/Editing';

import './App.css'; // Стили для анимации

function App() {
    return (
        <Router>
            <div className="app-wrapper">
                <Header />
                <div className="content">
                    <PageTransitions />
                </div>
                <Footer />
            </div>
        </Router>
    );
}

function PageTransitions() {
    const location = useLocation(); // Используем useLocation для отслеживания текущего маршрута

    // Прокрутка страницы в начало при изменении пути
    useEffect(() => {
        window.scrollTo(0, 0); // Прокрутить страницу в начало
    }, [location]); // Срабатывает при изменении пути

    return (
        <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.75 }}
        >
            <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/drone-services" element={<DroneServices />} />
                <Route path="/drone-services/drone-filming" element={<DroneFilming />} />
                <Route path="/drone-services/commercial-drone-services" element={<CommercialDrone />} />
                <Route path="/drone-services/drone-survey" element={<DroneSurvey />} />
                <Route path="/drone-services/real-estate-drone-photography" element={<RealEstate />} />
                <Route path="/editing" element={<Editing />} />
            </Routes>
        </motion.div>
    );
}

export default App;














