// src/components/About.jsx

const About = () => {
  return (
    <section id="about" className="section about-brand">
      <div className="container">
        <div className="title reveal">
          <span className="script">Our Philosophy</span>
          <h2 className="bold">Shaping the Next Era</h2>
        </div>
        <div className="about-brand-grid reveal">
          <div className="about-brand-text">
            <h3>Our Vision</h3>
            <p>At Nextera, we believe the digital world is entering a new era. Our mission is to shape that future, empowering businesses to grow and thrive.</p>
          </div>
          <div className="about-brand-text">
            <h3>What We Do</h3>
            <p>We create innovative websites, mobile apps, and digital marketing solutions designed for impact, blending cutting-edge technology with creative passion.</p>
          </div>
          <div className="about-brand-text full-width">
            <h3>Our Commitment</h3>
            <p>Nextera is dedicated to delivering modern, reliable, and impactful digital experiences for clients worldwide, ensuring every project pushes the boundaries of excellence.</p>
          </div>
          <div className="about-brand-image">
            <img src="/brand-image.jpg" alt="Nextera's innovative digital approach" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;