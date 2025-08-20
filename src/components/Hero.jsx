// No image import needed at the top

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="kicker">𝙽𝔼𝕏𝕋𝔼𝚁𝙰</div>
                <h1>Shaping the <span className="fill">Next Era</span> of Digital</h1>
                <p>Bold branding, clean UI/UX, and modern web experiences. Crafted with strategy, aesthetics, and performance in mind.</p>
                <div className="actions">
                    <a className="btn btn-primary" href="#contents">
                        Explore Work
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 15 3.5-3.5L12 8"/><path d="M19 12H3"/></svg>
                    </a>
                    <a className="btn" href="#contact">Start a Project</a>
                </div>
                <div className="scroll-hint" aria-hidden="true">
                    <span className="dot"></span><span>Scroll</span><span className="dot"></span>
                </div>
            </div>
        </section>
    );
};

export default Hero;