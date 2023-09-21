
import React from 'react';


const About = () => {
    return (
        
        <section id="about">
            <div className="about-container">
                <div className="about-section">
                    <h1>Études</h1>
                    <p>
                    Passionné de technologie, je poursuis actuellement un parcours académique en tant qu'étudiant ingénieur en informatique au CESI. 
                    Fort de mes compétences académiques et de mon désir insatiable d'apprendre, je suis activement à la recherche d'une opportunité d'alternance
                    qui me permettrait de plonger dans les domaines captivants du développement orienté objet ou web. 
                    Je suis convaincu que cette expérience me fournira une plateforme idéale pour appliquer mes connaissances théoriques.
                    </p>
                </div>
                <div className="about-section">
                    <h1>Vie Personnelle</h1>
                    <p>
                    En dehors de mes études, je nourris une vive passion pour la mode et les sneakers. 
                    Sur le terrain de basket, je m'exprime depuis 8 ans avec la niaque. 
                    Mes loisirs sportifs s'étendent également au ski et au fitness, 
                    tandis que les voyages élargissent constamment mon horizon. Par ailleurs, 
                    je suis également immergé dans le monde de l'investissement, 
                    toujours à la recherche de nouvelles opportunités pour l'avenir.
                    </p>
                </div>
                <div className="about-section">
                    <h1>Technologies</h1>
                    <p>
                        Au cours de ma formation, 
                        j'ai acquis une expertise solide en Java, 
                        me permettant de développer des applications robustes. 
                        J'ai également exploré .NET pour des solutions intégrées, 
                        tout en maîtrisant SQL pour la gestion des bases de données. 
                        Git est devenu mon outil incontournable pour la gestion de versions. 
                        Actuellement, je me concentre sur React, étoffant mes compétences front-end, 
                        ce qui se manifeste à travers la réalisation de mon portfolio
                    </p>
                    
                    <div class="tech-icons">
                        <i class="fab fa-java"></i>
                        <i class="fab fa-microsoft"></i>
                        <i class="fas fa-database"></i>
                        <i class="fab fa-git"></i>
                        <i class="fab fa-react"></i>
                    </div>

                </div>
            </div>
        </section>

    );
}

export default About;


