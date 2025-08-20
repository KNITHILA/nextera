// src/components/Experience.jsx

const experiences = [
    {
        title: "Brand Identity & Strategy",
        description: "Crafting memorable brand identities from the ground up, including logo design, color theory, and comprehensive brand guidelines."
    },
    {
        title: "UI/UX Design",
        description: "Designing intuitive and engaging user interfaces for web and mobile, focusing on user-centered principles and seamless experiences."
    },
    {
        title: "Web & App Development",
        description: "Bringing designs to life with clean, modern code, specializing in responsive websites and interactive web applications using React."
    },
    {
        title: "Print & Packaging",
        description: "Creating tangible brand assets, including posters, brochures, and product packaging that stands out on the shelf."
    },
    {
        title: "Social Media Creative",
        description: "Developing cohesive and eye-catching visuals for social media campaigns that drive engagement and build brand awareness."
    },
    {
        title: "Logo Design & Folio",
        description: "Designing unique and versatile logos, from monograms to full wordmarks, that form the cornerstone of a strong brand identity."
    }
];

const Experience = () => {
    return (
        <section className="section experience-section">
            <div className="container">
                <div className="title reveal">
                    <span className="script">Our Expertise</span>
                    <h2 className="bold">Core Skills</h2>
                </div>
                <div className="experience-grid reveal">
                    {experiences.map((exp, index) => (
                        <div className="experience-card" key={index}>
                            <div className="exp-num">{String(index + 1).padStart(2, '0')}</div>
                            <h3>{exp.title}</h3>
                            <p>{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;