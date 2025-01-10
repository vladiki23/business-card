import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import DroneServices from './pages/DroneServices';
import Editing from './pages/Editing';

function App() {
    return (
        <div className="app-wrapper">
            <Router>
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/drone-services" element={<DroneServices />} />
                        <Route path="/editing" element={<Editing />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;







