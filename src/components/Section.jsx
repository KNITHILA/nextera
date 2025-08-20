const Section = ({ id, sectionType = 'section', scriptTitle, boldTitle, children }) => {
    return (
        <section id={id} className={sectionType}>
            {(scriptTitle || boldTitle) && (
                <div className="title">
                    <span className="script">{scriptTitle}</span>
                    <span className="bold">{boldTitle}</span>
                </div>
            )}
            {children}
        </section>
    );
};

export default Section;