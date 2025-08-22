// src/pages/HomePage.jsx

import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import Contents from '../components/Contents';
import Contact from '../components/Contact';
import About from '../components/About';
import Experience from '../components/Experience';
import { portfolioSections } from '../data/portfolioData.js';

const HomePage = () => {
    return (
        <>
            <Hero />
            <About />
            <Experience />
            <Contents />

            {portfolioSections.map((section, index) => (
                <Section key={section.id} id={section.id} sectionType="cat">
                    {/* THIS PART ADDS THE TITLES BACK */}
                    <div className="container head reveal">
                        <h2>{section.title}</h2>
                        <p>{section.description}</p>
                    </div>
                    
                    {/* --- HORIZONTAL SCROLLER WITH ALTERNATING DIRECTION --- */}
                    <div 
                      className="scroller" 
                      data-direction={index % 2 === 0 ? 'left' : 'right'}
                      data-speed="slow"
                    >
                      <div className="scroller-track">
                        {/* Render cards once */}
                        {section.cards.map(card => (
                          <Card key={card.title} {...card} />
                        ))}
                        {/* Render cards a second time for the seamless loop */}
                        {section.cards.map(card => (
                          <Card key={`${card.title}-duplicate`} {...card} aria-hidden={true} />
                        ))}
                      </div>
                    </div>

                </Section>
            ))}
            
            <Contact />
        </>
    );
};

export default HomePage;