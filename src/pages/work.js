import React from "react";
import data from "../data.json";

const Work = () => {
  return (
    <section className="card">
      <ul>
        {data.map((project, index) => (
          <li key={index}>
            <div className="cardImg">
              <img
                src={project.img}
                width="100%"
                height="100%"
                alt={project.title}
              />
            </div>
            <div className="cardText">
              <h2>{project.title}</h2>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Check Website</button>
              </a>
              <a
                href={project.GitHub}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Go to GitHub</button>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Work;

