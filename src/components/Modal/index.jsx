import React from 'react';
import './modal.css';  

function Modal({ show, onClose, title, message }) {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2 className="modal-title">{title}</h2>
                <p className="modal-message">{message}</p>
                <button className="modal-close-button" onClick={onClose}>Fermer</button>
            </div>
        </div>
    );
}

export default Modal;