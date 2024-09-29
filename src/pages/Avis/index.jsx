import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import './avis.css';

const Avis = () => {
    /* eslint-disable no-unused-vars */
    const [reviews, setReviews] = useState([
        { id: 1, name: 'Erwan Tibo', rating: 4, comment: 'Satisfait du travail réalisé. Quelques détails à peaufiner, mais l\'essentiel est là. Le rendu final est excellent. Merci à vous pour votre professionnalisme. '},
        { id: 2, name: 'Marie Cassin', rating: 5, comment: 'Service impeccable, rapide et professionnel. Mon projet a été réalisé exactement comme je l\'imaginais, avec même quelques suggestions en plus qui ont fait toute la différence. Je recommande vivement !' },
        { id: 3, name: 'Pierre Lefevre', rating: 4, comment: 'Très bon service et à l’écoute. Le résultat est globalement satisfaisant, quelques petits ajustements nécessaires, mais Ludmilla a réagi rapidement pour les corriger.' },
        { id: 4, name: 'Mélanie Lutino', rating: 5, comment: 'Un travail de grande qualité, tant sur le plan technique que sur le design. Mon site est fluide, esthétique et optimisé. Merci pour ce service au top !' },
        { id: 5, name: 'Vince Delatre', rating: 5, comment: 'Très satisfait du résultat final. Exécution parfaite et dans les délais. Une professionnelle à l\'écoute et qui comprend parfaitement les besoins. Je ferai de nouveau appel à elle sans hésiter.'},
        { id: 6, name: 'Yvon Dufour', rating: 5, comment: 'Un excellent travail. Très bonne communication tout au long du projet. Je suis très content du résultat et du suivi. Je recommande à 100%' },
    ]);

    const [showForm, setShowForm] = useState(false);
    const [newReview, setNewReview] = useState({ name: '', rating: 0, comment: '' });
    const [currentSlide, setCurrentSlide] = useState(0);
    const [captchaValue, setCaptchaValue] = useState(null);
    const [captchaVerified, setCaptchaVerified] = useState(false);


    // Slider automatique
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % reviews.length);
        }, 5000); // Change de slide toutes les 3 secondes //

        return () => clearInterval(interval);
    }, [reviews.length]);

    const handleAddReview = () => {
        if (newReview.name && newReview.comment && newReview.rating && captchaVerified) {
            sendEmail(); // Appel de la fonction pour envoyer l'avis par email //
        } else {
            alert("Veuillez remplir tous les champs et valider le reCAPTCHA.");
        }
    };

    const sendEmail = () => {
        emailjs.send(
            'service_ni2kr4g',
            'template_f82j7sl',
            {
                name: newReview.name,
                rating: newReview.rating,
                comment: newReview.comment,
            },
            'MMCldRgvGL2OmMHp_' 
        ).then((result) => {
            console.log(result.text);
            alert("Votre avis a été envoyé avec succès !");
            setNewReview({ name: '', rating: 0, comment: '' });
            setShowForm(false);
            setCaptchaValue(null);
            setCaptchaVerified(false);
        }, (error) => {
            console.log(error.text);
            alert("Une erreur s'est produite lors de l'envoi de votre avis.");
        });
    };

    // Gestion de la validation reCAPTCHA //
    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
        setCaptchaVerified(!!value); // Convertit en booléen (true si valeur présente) //
    };

    return (
        <div className="slider-container">
            <i className="fa-solid fa-edit"></i>
            <h2 className="title-avis">Avis vérifiés </h2>
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {reviews.map((review) => (
                    <div key={review.id} className="slide">
                        <div className="avis">
                            <h3>{review.name}</h3>
                            <div className="stars">
                                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                            </div>
                            <p>{review.comment}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="add-review">
                <button className="add-button" onClick={() => setShowForm(!showForm)}>+</button>
            </div>

            {showForm && (
                <div className="review-form">
                    <h3>Ajouter un avis</h3>
                    <form className="form-avis" onSubmit={(e) => { e.preventDefault(); handleAddReview(); }}>
                        <div className="form-group">
                            <label htmlFor="nomprenom">Prénom & Nom </label>
                            <input
                                type="text"
                                id="nomprenom"
                                name="nomprenom"
                                placeholder="Votre nom"
                                value={newReview.name}
                                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="note">Note</label>
                            <select
                                id='note'
                                name="note"
                                value={newReview.rating}
                                onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                                required
                            >
                                <option value={0}>Note</option>
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <option key={num} value={num}>
                                        {num} étoile{num > 1 ? 's' : ''}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="avis">Commentaire</label>
                            <textarea
                                id="avis"
                                name="avis"
                                placeholder="Votre commentaire"
                                value={newReview.comment}
                                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <ReCAPTCHA
                                sitekey="6LfhfU8qAAAAAAffu8fEUdJEklwFTz15WAEXmy-j" 
                                onChange={handleCaptchaChange}
                            />
                        </div>

                        <button type="submit"><span>Ajouter</span></button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Avis;