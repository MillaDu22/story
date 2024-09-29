import React from 'react';
import Home from "../pages/Home/index";
import About from "../pages/About/index";
import Services from "../pages/Services/index.jsx";
import Avis from "../pages/Avis/index.jsx";
import Contact from "../pages/Contact/index.jsx";
import Error from "../pages/Error/index";
import { Routes, Route } from "react-router-dom";


const Router =  () => {
    return (
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/avis" element={<Avis />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Error />} />
            </Routes>
    );
};

export default Router;