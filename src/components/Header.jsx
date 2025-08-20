import { useState } from 'react';

// No logo import is needed here when using the public folder

const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false);

    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    };

    return (
        <header>
            <div className="container nav">
                <a href="#home" className="brand" aria-label="Nextera Home">
                    <span className="brand-mark" aria-hidden="true">
                        {/* This path now correctly points to the logo in your 'public' folder */}
                        <img src="/nextera-logo.png" alt="Nextera Logo" />
                    </span>
                    <span className="brand-name">Nextera</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="desktop-nav" aria-label="Primary">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contents">Contents</a></li>
                        <li><a href="#branding">Branding</a></li>
                        <li><a href="#uiux">UI/UX</a></li>
                        <li>
                            <a href="#contact" className="cta">
                                Contact
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </a>
                        </li>
                    </ul>
                </nav>
                
                {/* Mobile Navigation */}
                 <nav className={`mobile-nav ${isNavActive ? 'active' : ''}`} aria-label="Primary">
                    <ul>
                        <li><a href="#home" onClick={toggleNav}>Home</a></li>
                        <li><a href="#about" onClick={toggleNav}>About</a></li>
                        <li><a href="#contents" onClick={toggleNav}>Contents</a></li>
                        <li><a href="#branding" onClick={toggleNav}>Branding</a></li>
                        <li><a href="#uiux" onClick={toggleNav}>UI/UX</a></li>
                        <li>
                            <a href="#contact" className="cta" onClick={toggleNav}>
                                Contact
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </a>
                        </li>
                    </ul>
                </nav>

                <button className={`hamburger ${isNavActive ? 'active' : ''}`} aria-label="Toggle menu" aria-expanded={isNavActive} onClick={toggleNav}>
                    <span></span><span></span><span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;