import React from 'react';
import './detailspack.css';

function DetailsPack({ isOpen, details }) {
    return (
        <div className={`details-pack ${isOpen ? 'open' : ''}`}>
            <p className="txt-details">{details}</p>
        </div>
    );
}

export default DetailsPack;