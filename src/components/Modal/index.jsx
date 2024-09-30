import React from 'react';
import './modal.css';  

function Modal({ show, onClose, title, message }) {
    if (!show) {
        return null;
    }

    return (
        <div className="bottom-banner">
            <div className="banner-content">
                <h2 className="banner-title">{title}</h2>
                <p className="banner-message">{message}</p>
            </div>
            <button className="banner-close-button" onClick={onClose}>Fermer</button>
        </div>
    );
}

export default Modal;