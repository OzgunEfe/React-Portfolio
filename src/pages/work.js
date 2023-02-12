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
                width="250px"
                height="250px"
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
                <button>See on GitHub</button>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Work;

{
  /* <div className="cardImg">
<Image
  src={JammmingImg}
  alt="Jammming Webpage"
  width="200px"
  height="200px"
/>
</div> */
}

// import JammmingImg from "./img/jammming-min.png";
// import CodingQuizImg from "./img/coding-quiz.png";
// import DailyPlannerImg from "./img/daily-planner.png";
// import PasswordGeneratorImg from "./img/password-generator.png";
// import TodoAppImg from "./img/todo-app.png";
// import WeatherAppImg from "./img/weather-dashboard.png";
