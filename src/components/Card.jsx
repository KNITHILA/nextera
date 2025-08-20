const Card = ({ img, title, description }) => {
    return (
        <div className="card">
            <img src={img} alt={title} loading="lazy" />
            <div className="card-content">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;