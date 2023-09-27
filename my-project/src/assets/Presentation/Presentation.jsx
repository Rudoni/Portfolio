import React from 'react';
import Header from '../Header/Header';
import { Contact } from '../Contact/Contact';




const Presentation = () => {

    return (
        <div className="bg-white h-screen">
          <Header />
      
          <div className="flex pl-20 pt-10 bg-white"> 
      
            <div className="text-content space-y-6"> 
              <p className="text-lightbrown md:text-4xl font-semibold leading-normal font-pop pt-6 pb-6">
                Bonjour,<br /> Je m'appelle Antonin RUDONI.
              </p>
              <p className='text-beige md:text-4xl font-pop font-semibold leading-normal pt-8 w-4/5 pb-20'>
                Je suis activement en quête d'une <span className='text-brown md:text-size'>opportunité d'alternance</span> en tant que <span className='text-brown md:text-size'>développeur</span> pour démarrer mon parcours d'ingénieur en informatique.
              </p>

              <a className="group relative inline-flex items-center overflow-hidden rounded bg-brown px-20 py-7 text-white focus:outline-none focus:ring active:bg-beige"
                href="/CV.pdf" target="_blank" rel="noopener noreferrer">
                <span className="absolute -start-full transition-all group-hover:start-4">
                  <svg className="h-5 w-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <span className="text-xl font-medium transition-all group-hover:ms-4">
                  Télécharger
                </span>
              </a>

            </div>
                <img src="/Antoninn.png" alt="" style={{ filter: 'drop-shadow(1vb 1vb 2vb #D9BC9A)' }} className="hidden md:block w-1/3 object-cover h-screen"/>
            
          </div>
          <Contact />
        </div>
      );
}

export default Presentation;

