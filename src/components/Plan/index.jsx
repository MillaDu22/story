import React from 'react';
import { Link } from 'react-router-dom';
import './plan.css';

function Plan() {
    return(
        <section id="site-map" className="site-map-section">
            <h2>Plan du site</h2>
            <p className="p-plan"><strong>&gt; </strong><Link className="link-plan" to="/"> Accueil</Link></p>
            <p className="p-plan"><strong>&gt; </strong><Link className="link-plan" to="/about"> AWC</Link></p>
            <p className="p-plan"><strong>&gt; </strong><Link className="link-plan" to="/services"> Packs</Link></p>
            <p className="p-plan"><strong>&gt; </strong><Link className="link-plan" to="/avis"> Avis</Link></p>
            <p className="p-plan"><strong>&gt; </strong><Link className="link-plan" to="/contact"> Contact</Link></p>
        </section>
    )
}
export default Plan;