// src/pages/HomePage.jsx

import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import Contents from '../components/Contents';
import Contact from '../components/Contact';
import About from '../components/About';
import Experience from '../components/Experience';
import { portfolioSections } from '../data/portfolioData.js'; // <-- Import data here

const HomePage = () => {
    return (
        <>
            <Hero />
            <About />
            <Experience />
            <Contents />

            {portfolioSections.map(section => (
                <Section key={section.id} id={section.id} sectionType="cat">
                    <div className="container">
                        <div className="head reveal">
                            <h2>{section.title}</h2>
                            <p>{section.description}</p>
                        </div>
                        <div className="grid reveal">
                            {section.cards.map(card => (
                                <Card key={card.title} {...card} />
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