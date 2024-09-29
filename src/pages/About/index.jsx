import React, { useEffect } from 'react';
import './about.css';

function About() {

    useEffect(() => {
        const section = document.querySelector('.container-about');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fadeInUp');
                }
            });
        }, {
            threshold: 0.2 // Animation déclenchée quand 20% de la section est visible //
        });

        observer.observe(section);

        return () => observer.unobserve(section);
    }, []);

    return (
        <div id="about" className="container-about">
            <div className="content-about">
                <i className="fa-regular fa-address-card"></i>
                <h3 className="subtitle-about">À propos de AWC</h3>
                <h2 className="title-about">Bienvenue chez Armor Web Créations</h2>
                <div className="box-about">
                    <p className="txt-about">
                        Chez Armor Web Créations, chaque projet est unique et mérite une attention particulière. 
                        En tant que développeur web freelance, j'apporte une expertise polyvalente et des solutions sur mesure pour donner vie à vos idées. 
                        Mon approche est centrée sur la créativité, l'efficacité et une personnalisation poussée, pour que votre site web ne soit pas seulement fonctionnel, 
                        mais qu'il se démarque véritablement.
                    </p>
                    <div className="list">
                        <p className="li"><i className="fas fa-code"></i> HTML5 & CSS3</p>
                        <p className="li"><i className="fas fa-paint-brush"></i> SASS & Responsive Design</p>
                        <p className="li"><i className="fas fa-layer-group"></i> JavaScript & Frameworks Modernes</p>
                        <p className="li"><i className="fas fa-mobile-alt"></i> Optimisation Mobile, Tablette et Desktop</p>
                        <p className="li"><i className="fas fa-plug"></i> Intégration API & Services Backend</p>
                        <p className="li"><i className="fas fa-search"></i> SEO & Performance</p>
                    </div>
                </div>
                <div className="box-specifications">
                    <span className="one-specification">
                        <h3 className="specification"><i className="fas fa-cogs"></i> Personnalisation Puissante</h3>
                        <p className="txt-specification">
                            Chaque projet est adapté à vos besoins spécifiques. Grâce à une flexibilité maximale, votre site reflétera parfaitement votre identité.
                        </p>
                    </span>
                    <span className="one-specification">
                        <h3 className="specification"><i className="fas fa-lightbulb"></i> Design Créatif</h3>
                        <p className="txt-specification">
                            Mêlant esthétique et fonctionnalité, je conçois des interfaces modernes et intuitives qui captivent vos utilisateurs dès le premier regard.
                        </p>
                    </span>
                    <span className="one-specification">
                        <h3 className="specification"><i className="fas fa-tools"></i> Solutions Efficaces</h3>
                        <p className="txt-specification">
                            J'optimise chaque aspect technique pour garantir un site rapide, sécurisé et évolutif, prêt à relever les défis de demain.
                        </p>
                    </span>
                    <span className="one-specification">
                        <h3 className="specification"><i className="fas fa-code"></i> Code Propre</h3>
                        <p className="txt-specification">
                            Un code bien structuré et maintenable est essentiel pour la pérennité de votre site. Je m'assure que chaque ligne de code est claire, optimisée et prête pour l'avenir.
                        </p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default About;