import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/index.jsx';
import './navbar.css';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="container-navbar">
            <nav className="nav-header">
                {/* Bouton de menu burger pour mobile */}
                <button className="menu-toggle" onClick={toggleMobileMenu}>
                    ☰
                </button>

                {/* Logo centré */}
                <div className="logo-centered">
                    <Logo />
                </div>

                {/* Conteneur complet du menu (sections gauche et droite) */}
                <div className={`nav-items ${isMobileMenuOpen ? "active" : ""}`}>
                    {/* Section gauche */}
                    <div className="nav-left">
                        <Link className="nav-item" to="/" onClick={toggleMobileMenu}>
                            <p className="nav-item-text">Accueil</p>
                        </Link>
                        <Link className="nav-item" to="/about" onClick={toggleMobileMenu}>
                            <p className="nav-item-text">AWC</p>
                        </Link>
                        <a className="nav-item" href="https://milladu22.github.io/ldla-mti-web-developer/" target="_blank" rel="noreferrer" onClick={toggleMobileMenu}>
                            <p className="nav-item-text">Projets</p>
                        </a>
                    </div>

                    {/* Section droite */}
                    <div className="nav-right">
                        <Link className="nav-item" to="/services" onClick={toggleMobileMenu}>
                            <p className="nav-item-text">Packs</p>
                        </Link>
                        <Link className="nav-item" to="/avis" onClick={toggleMobileMenu}>
                            <p className="nav-item-text">Avis</p>
                        </Link>
                        <Link className="nav-item" to="/contact" onClick={toggleMobileMenu}>
                            <p className="nav-item-text">Contact</p>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

