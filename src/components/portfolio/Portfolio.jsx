import React from "react";
import "./portfolio.css";
import IMG1 from "../../Assets/portfolio1.jpg";
import IMG2 from "../../Assets/portfolio2.jpg";
import IMG3 from "../../Assets/portfolio3.jpg";
import IMG4 from "../../Assets/portfolio4.jpg";
import IMG5 from "../../Assets/portfolio5.png";
import IMG6 from "../../Assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "This is my first project",
    github: "https://github.com/Festus-Osayi?tab=repositories",
    demo: "https://dribbble.com/Alien_pixels",
    
  },

  {
    id: 2,
    image: IMG2,
    title: "This is my first project",
    github: "https://github.com/Festus-Osayi?tab=repositories",
    demo: "https://dribbble.com/Alien_pixels",
    
  },

  {
    id: 3,
    image: IMG3,
    title: "This is my first project",
    github: "https://github.com/Festus-Osayi?tab=repositories",
    demo: "https://dribbble.com/Alien_pixels",
    
  },

  {
    id: 4,
    image: IMG4,
    title: "This is my first project",
    github: "https://github.com/Festus-Osayi?tab=repositories",
    demo: "https://dribbble.com/Alien_pixels",
    
  },

  {
    id: 5,
    image: IMG5,
    title: "This is my first project",
    github: "https://github.com/Festus-Osayi?tab=repositories",
    demo: "https://dribbble.com/Alien_pixels",
    
  },

  {
    id: 6,
    image: IMG6,
    title: "This is my first project",
    github: "https://github.com/Festus-Osayi?tab=repositories",
    demo: "https://dribbble.com/Alien_pixels",
    
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="conatiner portfolio__container">
        {data.map(({ id, image, title, github, demo}) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>

              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>

                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}

        {/* end of the porfolio */}
      </div>
    </section>
  );
};

export default Portfolio;
