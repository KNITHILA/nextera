// src/pages/HomePage.jsx

import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import Contents from '../components/Contents';
import Contact from '../components/Contact';
import About from '../components/About';
import Experience from '../components/Experience';

// NOTE: We are moving the portfolioSections data here from App.jsx
const portfolioSections = [
  {
    id: "branding",
    title: "Branding",
    description: "Crafting memorable visual identities that tell a story and build brand loyalty.",
    cards: [
      { img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Brand Guidelines", description: "Comprehensive guides for consistent brand application." },
      { img: "https://images.pexels.com/photos/163065/mobile-phone-mockup-business-office-163065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Stationery & Mockups", description: "Professional business cards, letterheads, and digital assets." },
      { img: "https://images.pexels.com/photos/7147040/pexels-photo-7147040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Visual Identity Systems", description: "Holistic systems including logos, color palettes, and typography." }
    ]
  },
  // ... include ALL other sections (social, packaging, etc.) here as they were in App.jsx
  {
    id: "social",
    title: "Social Media",
    description: "Designing engaging and shareable content that grows your audience and drives results.",
    cards: [
      { img: "https://images.pexels.com/photos/5999933/pexels-photo-5999933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Instagram Post Templates", description: "Visually consistent and reusable templates for your feed." },
      { img: "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Performance Ad Creatives", description: "Eye-catching ads optimized for conversion on all platforms." },
      { img: "https://images.pexels.com/photos/7648325/pexels-photo-7648325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Short-Form Video Graphics", description: "Engaging graphics for TikTok, Reels, and Shorts." }
    ]
  },
  {
    id: "packaging",
    title: "Packaging",
    description: "Creating beautiful, functional packaging that captures attention and tells your product's story.",
    cards: [
        { img: "https://images.pexels.com/photos/7773223/pexels-photo-7773223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Luxury Box Design", description: "Premium packaging solutions for high-end products." },
        { img: "https://images.pexels.com/photos/5864192/pexels-photo-5864192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Cosmetic & Bottle Labels", description: "Elegant and compliant labels for the beauty industry." },
        { img: "https://images.pexels.com/photos/6765507/pexels-photo-6765507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Sustainable Packaging", description: "Eco-friendly designs that delight customers." },
    ]
  },
  {
    id: "print",
    title: "Print Media",
    description: "Designing impactful print materials that bridge the gap between digital and physical.",
    cards: [
        { img: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Modern Poster Design", description: "Bold and artistic posters for events and campaigns." },
        { img: "https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Corporate Brochures", description: "Professional and informative layouts that build trust." },
        { img: "https://images.pexels.com/photos/5926395/pexels-photo-5926395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Magazine & Editorial", description: "Clean and readable layouts for publications." },
    ]
  },
  {
    id: "uiux",
    title: "UI / UX",
    description: "Designing intuitive digital experiences that are both beautiful and easy to use.",
    cards: [
      { img: "/portfolio/uiux-main-project.jpg", title: "Web App Interface", description: "A comprehensive UI/UX design from concept to final mockup." },
      { img: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Mobile App Design", description: "User-centric mobile interfaces for iOS and Android." },
      { img: "https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Scalable Design Systems", description: "Cohesive component libraries for consistent development." }
    ]
  },
  {
    id: "logo-folio",
    title: "Logo Folio",
    description: "A collection of unique and memorable logos designed to build lasting brand recognition.",
    cards: [
        { img: "https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Minimalist Monograms", description: "Elegant and simple marks with a modern feel." },
        { img: "https://images.pexels.com/photos/1126742/pexels-photo-1126742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Custom Wordmarks", description: "Unique typography and custom letterforms." },
        { img: "https://images.pexels.com/photos/1484439/pexels-photo-1484439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Versatile Badges & Emblems", description: "Classic and adaptable lockups for various applications." },
    ]
  }
];

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