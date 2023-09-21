// Projects.js
import React from 'react';


export const Projects = () => {
    return (
        <section id="projects">
                <div className="project-container">
                    <a href="https://github.com/Rudoni/Zeldiablo/tree/main" target="_blank" rel="noopener noreferrer" className="project-link">
                        <img src="/Zeldiablo.png" alt="Description Projet 1" className="project-image" />
                    </a>
                    <a href="https://github.com/Rudoni/DevUnity4Hololens" target="_blank" rel="noopener noreferrer" className="project-link">
                        <img src="/Hololens.png" alt="Description Projet 2" className="project-image" />
                    </a>
                    <a href="#Presentation" className="project-link">
                        <img src="/Portfolio.png" alt="Description Projet 3" className="project-image" />
                    </a>
                </div>


        </section>
    );
}


