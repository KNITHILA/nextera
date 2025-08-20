import React from "react";
import { portfolioSections } from "../data/portfolioData";
import Card from "./Card";

const AllCategories = () => {
  return (
    <section id="all-categories" className="cat">
      <div className="container">
        <div className="head">
          <h2>All Categories</h2>
          <p>Explore our projects across different domains.</p>
        </div>

        {portfolioSections.map((section) => (
          <div key={section.id} className="category-block reveal">
            <h3 className="category-title">{section.title}</h3>
            <p className="category-desc">{section.description}</p>
            <div className="grid">
              {section.cards.map((card, idx) => (
                <Card
                  key={idx}
                  img={card.img}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};