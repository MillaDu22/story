import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/index.jsx';
import './navbar.css';

function Navbar() {
    return (
        <div className="container-navbar">
            <nav className="nav-header">
                <Link className="nav-item" to="/">
                    <p className="nav-item-text">Accueil</p>
                </Link>
                <Link className="nav-item" to="/about">
                    <p className="nav-item-text">AWC</p>
                </Link>
                <a className="nav-item" href="https://milladu22.github.io/ldla-mti-web-developer/" target="blank">
                    <p className="nav-item-text">Projets</p>
                </a>
                <Logo />
                <Link className="nav-item" to="/services">
                    <p className="nav-item-text">Packs</p>
                </Link>
                <Link className="nav-item" to="/avis">
                    <p className="nav-item-text">Avis</p>
                </Link>
                <Link className="nav-item" to="/contact">
                    <p className="nav-item-text">Contact</p>
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;