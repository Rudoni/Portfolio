// Projects.js
import React from 'react';
import Header from '../Header/Header';
import { Contact } from '../Contact/Contact';

export const Projects = () => {
    return (
        <section id="projects" className="bg-white">
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-12 ">
                <a href="https://github.com/Rudoni/Zeldiablo/tree/main" target="_blank" rel="noopener noreferrer">
                    <img src="/Zeldiablo.png" alt="Description Projet 1" className="w-full h-full object-cover border rounded-3xl transform hover:scale-105 transition-transform duration-300" />
                </a>
                <a href="https://github.com/Rudoni/DevUnity4Hololens" target="_blank" rel="noopener noreferrer">
                    <img src="/Hololens.png" alt="Description Projet 2" className="w-full h-full object-cover border rounded-3xl transform hover:scale-105 transition-transform duration-300" />
                </a>
                <a href="/">
                    <img src="/Portfolio.png" alt="Description Projet 3" className="w-full h-full object-cover border rounded-3xl transform hover:scale-105 transition-transform duration-300" />
                </a>
                <div className="flex justify-center items-center h-custom w-full border rounded-3xl transform hover:scale-105 transition-transform duration-300 bg-beige text-brown">
                    Coming Soon
                </div>
                <div className="flex justify-center items-center h-custom w-full border rounded-3xl transform hover:scale-105 transition-transform duration-300 bg-beige text-brown">
                    Coming Soon
                </div>
                <div className="flex justify-center items-center h-custom w-full border rounded-3xl transform hover:scale-105 transition-transform duration-300 bg-beige text-brown">
                    Coming Soon
                </div>
            </div>
            <Contact />
        </section>
    );
}




