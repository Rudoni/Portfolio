// Contact.js
import React from 'react';
import Header from '../Header/Header';


export const Contact = () => {
    return (
        <section id="contact">
            <Header />
            <div className="bg-white">
                <h2>Contact</h2>
                <div className="mail-container">
                    <a href="mailto:antoninrudoni@gmail.com" className="mail-button">antoninrudoni@gmail.com</a>
                </div>
                <div className="phone-container">
                    <a href="tel:+33787642623" className="phone-button">+33 7 87 64 26 23</a>
                </div>
            </div>
        </section>
    );
}



