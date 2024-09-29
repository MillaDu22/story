import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from '../src/components/Navbar/index.jsx';
import Footer from "../src/components/Footer/index.jsx";
import Router from "./Router/router.jsx";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <HashRouter>
          <Navbar />
          <Router />
          <Footer />
        </HashRouter>
  </React.StrictMode>
);
reportWebVitals();