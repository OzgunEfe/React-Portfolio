import React from "react";
import MediumImg from "./img/Medium-min.png";
import AsianKitchen from "./img/AsianKitchen-min.png";
import Furniture from "./img/furniture-min.png";
import JakesEatery from "./img/JakesEatery-min.png";
import Jammming from "./img/jammming-min.png";
import Portfolio from "./img/Portfolio-min.png";

const Image = (props) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      style={{ width: props.width, height: props.height }}
    />
  );
};

const Work = () => {
  return (
    <section className="workMain">
      <div className="card card-1">
        <div className="cardImg">
          <Image
            src={Jammming}
            alt="Jammming Webpage"
            width="200px"
            height="200px"
          />
        </div>
        <div className="cardText">
          <h2>Jammming</h2>
          <p>
            I built a React web application. I used the Spotify API and React to
            build this website.
          </p>
          <button>View website</button>
        </div>
      </div>
      <div className="card card-2">
        <div className="cardImg">
          <Image
            src={Portfolio}
            alt="Portfolio Webpage"
            width="200px"
            height="200px"
          />
        </div>
        <div className="cardText">
          <h2>Portfolio</h2>
          <p>I created my portfolio website using HTML and CSS.</p>
          <button>View website</button>
        </div>
      </div>
      <div className="card card-3">
        <div className="cardImg">
          <Image
            src={JakesEatery}
            alt="Jakes Eatery Webpage"
            width="200px"
            height="200px"
          />
        </div>
        <div className="cardText">
          <h2>Jakes Eatery</h2>
          <p>I coded a restaurant website using the CSS flexbox properties.</p>
          <button>View website</button>
        </div>
      </div>
      <div className="card card-4">
        <div className="cardImg">
          <Image
            src={Furniture}
            alt="Furniture Store Webpage"
            width="200px"
            height="200px"
          />
        </div>
        <div className="cardText">
          <h2>Furniture Store</h2>
          <p>I coded a furniture shop website using the CSS Grid system.</p>
          <button>View website</button>
        </div>
      </div>
      <div className="card card-5">
        <div className="cardImg">
          <Image
            src={AsianKitchen}
            alt="Asian Kitchen Image"
            width="200px"
            height="200px"
          />
        </div>
        <div className="cardText">
          <h2>AsianKitchen</h2>
          <p>I coded a restaurant website using HTML, CSS and JavaScript.</p>
          <button>View website</button>
        </div>
      </div>
      <div className="card card-6">
        <div className="cardImg">
          <Image
            src={MediumImg}
            alt="Medium Clone Image"
            width="200px"
            height="200px"
          />
        </div>
        <div className="cardText">
          <h2>Medium Clone</h2>
          <p>I made a clone of the Medium website using Bootstrap.</p>
          <button>View website</button>
        </div>
      </div>
    </section>
  );
};

export default Work;
