import React from "react";
import "./AboutContentStyles.css";
import { Link } from "react-router-dom";

import Ps4 from "../assets/ReactJS.png";
import Watch from "../assets/APIproject.png";

const AboutContent = () => {
  return <div className="about">
    <div className="left">
        <h1>YOU WANT TO KNOW BEN?</h1>
        <p>
            I Am A React Front-end Dev And Node.js Back-end Dev.
        </p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
    </div>

    <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={Ps4} className="img" alt="Here is an image" />
            </div>
            <div className="img-stack bottom">
                <img src={Watch} className="img" alt="Here is an image" />
            </div>
        </div>
    </div>
  </div>;
};

export default AboutContent;