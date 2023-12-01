import "./HeroImgStyles.css";

import React from "react";
import IntroImg from "../assets/IMG-20231007-WA0063.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
        <img className="into-img" src={IntroImg} alt="AppleImage" />
    </div>
    <div className="content">
        <p>HI, I'M A GADGETS AFFILIATE.</p>
        <h1>React Web Developer/Node.JS Dev.</h1>
        <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
    </div>
  </div>
};

export default HeroImg;