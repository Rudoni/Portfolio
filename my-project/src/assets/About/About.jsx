import React from 'react';
import Header from '../Header/Header';

const About = () => {
    return (
        <section className=''id="about">
            <Header />
            <div className="bg-white min-h-screen flex flex-col xl:flex-row space-y-8 xl:h-screen xl:space-y-0 xl:space-x-6 p-10">
                <StyledContainer title="Études">
                    Passionné de technologie, je poursuis actuellement un parcours académique en tant qu'<span className='text-brown'>étudiant ingénieur en informatique</span> au CESI. Fort de mes compétences académiques et de mon <span className='text-brown'>désir insatiable d'apprendre,</span> je suis activement à la recherche d'une <span className='text-brown'>opportunité d'alternance</span> qui me permettrait de plonger dans les domaines captivants du <span className='text-brown'>développement orienté objet ou web</span>. Je suis convaincu que cette expérience me fournira une plateforme idéale pour appliquer mes connaissances théoriques.
                </StyledContainer>
                <StyledContainer title="Technologies">
                    Au cours de ma formation, j'ai acquis une expertise solide en <span className='text-brown'>Java</span>, me permettant de développer des applications robustes. J'ai également exploré <span className='text-brown'>.NET</span> pour des solutions intégrées, tout en maîtrisant <span className='text-brown'>SQL</span> pour la gestion des bases de données. <span className='text-brown'>Git</span> est devenu mon outil incontournable pour la gestion de versions. Actuellement, je me concentre sur <span className='text-brown'>React</span>, étoffant mes compétences front-end, ce qui se manifeste à travers la réalisation de mon portfolio.
                </StyledContainer>
                <StyledContainer title="Vie Personnelle">
                    En dehors de mes études, je nourris une vive passion pour <span className='text-brown'>la mode</span> et <span className='text-brown'>les sneakers</span>. Sur le terrain de <span className='text-brown'>basket</span>, je m'exprime depuis 8 ans avec la niaque. Mes loisirs sportifs s'étendent également au <span className='text-brown'>ski et au fitness</span>, tandis que <span className='text-brown'>les voyages</span> élargissent constamment mon horizon. Par ailleurs, je suis également immergé dans <span className='text-brown'>le monde de l'investissement</span>, toujours à la recherche de nouvelles opportunités pour l'avenir.
                </StyledContainer>
                
            </div>
        </section>
    );
}

const StyledContainer = ({ title, children }) => {
    return (
        <div style={{ filter: 'drop-shadow(0.20rem 0.20rem 0.40rem #D9BC9A)' }}  className="flex-1 h-full bg-white p-4 border rounded-3xl transform hover:scale-105 transition-transform duration-300">
            <h1 className='text-5xl p-7 text-lightbrown'>{title}</h1>
            <p className='text-2xl text-brown transition transform hover:text-beige p-6 '>
                {children}
            </p>
        </div>
    );
}

export default About;
