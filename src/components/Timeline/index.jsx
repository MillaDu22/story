import React, {useEffect} from 'react';
import './timeline.css';

const Timeline = () => {
    useEffect(() => {
        const handleScroll = () => {
            const boxes = document.querySelectorAll(".box");
            const triggerBottom = (window.innerHeight / 5) * 4;

            boxes.forEach((box) => {
                const topBox = box.getBoundingClientRect().top;
                if (topBox < triggerBottom) {
                    box.classList.add("show");
                } else {
                    box.classList.remove("show");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <section id="timeline" className="timeline">
            <i className="fa-solid fa-timeline"></i>
            <h2>Étapes de Projet</h2>
            <ul>
                <li>
                    <i className="fa-solid fa-handshake"></i>
                    <div className="box">
                        <div className="shadow-card-timeline">
                            <h3 className="title-time">Étape 1: Consultation Initiale</h3>
                            <p className="card-info">
                                Première rencontre pour discuter de vos besoins. Identification des objectifs du projet et des contraintes techniques.
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <i className="fa-solid fa-file-signature"></i>
                    <div className="box">
                        <div className="shadow-card-timeline">
                            <h3 className="title-time">Étape 2: Proposition de Devis</h3>
                            <p className="card-info">
                                Préparation et présentation d'un devis détaillé, incluant les fonctionnalités souhaitées, le budget et le calendrier estimé.
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <i className="fa-solid fa-pencil-ruler"></i>
                    <div className="box">
                        <div className="shadow-card-timeline">
                            <h3 className="title-time">Étape 3: Conception et Design</h3>
                            <p className="card-info">
                                Création des maquettes et prototypes si non fournies. Validation des choix de design avant de passer au développement.
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <i className="fa-solid fa-code"></i>
                    <div className="box">
                        <div className="shadow-card-timeline">
                            <h3 className="title-time">Étape 4: Développement</h3>
                            <p className="card-info">
                                Développement du site web selon les spécifications convenues. Tests itératifs pour assurer la qualité et la conformité aux attentes.
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <i className="fa-solid fa-bug"></i>
                    <div className="box">
                        <div className="shadow-card-timeline">
                            <h3 className="title-time">Étape 5: Test et Révision</h3>
                            <p className="card-info">
                                Tests complets pour identifier et corriger les bugs. Révision finale avec le client pour s'assurer que tout est conforme aux attentes.
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <i className="fa-solid fa-rocket"></i>
                    <div className="box">
                        <div className="shadow-card-timeline">
                            <h3 className="title-time">Étape 6: Lancement</h3>
                            <p className="card-info">
                                Mise en ligne du site web. Surveillance des performances initiales et ajustements si nécessaire. Transfert de la propriété au client.
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <i className="fa-solid fa-tools"></i>
                    <div className="box">
                        <div className="shadow-card-timeline">
                            <h3 className="title-time">Étape 7: Support et Maintenance</h3>
                            <p className="card-info">
                                Assistance selon l'offre pour la maintenance du site, mises à jour et amélioration des fonctionnalités.
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default Timeline;