import React from 'react';


const Presentation = () => {

    return (
        <div className="presentation-container">
            <p className="intro-text">Bonjour,<br></br> Je m'appelle Antonin RUDONI.</p>
            <p className='description-target'>Je suis activement en quête d'une <span className='highlight'>opportunité
             d'alternance</span> en tant que <span className='highlight'>développeur</span> pour démarrer mon parcours d'ingénieur en informatique.</p>
            <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="cv-button">Télécharger mon CV</a>
            <img src="/Antoninn.png" alt="" className="image-droite"/>
        </div>
        
        
    );
}

export default Presentation;

