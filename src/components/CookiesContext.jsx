import React, { createContext, useState, useEffect } from 'react';

// Créer le contexte //
export const CookiesContext = createContext();

export const CookiesProvider = ({ children }) => {
    const [cookiesAccepted, setCookiesAccepted] = useState(false);

    useEffect(() => {
        // Récupére l'état du consentement des cookies depuis le cookie navigateur //
        const consent = document.cookie
        .split('; ')
        .find(row => row.startsWith('cookieConsent='))
        ?.split('=')[1];

        if (consent === 'accepted') {
        setCookiesAccepted(true);
        }
    }, []);

    return (
        <CookiesContext.Provider value={{ cookiesAccepted, setCookiesAccepted }}>
        {children}
        </CookiesContext.Provider>
    );
};
