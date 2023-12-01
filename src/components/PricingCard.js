import { Link } from "react-router-dom";
import "./PricingCardStyles.css";

import React from "react";

const PricingCard = () => {
  return <div className="pricing">
    <div className="card-container">
        <div className="card">
            <h3>- Basic -</h3>
            <span className="bar"></span>
            <p className="btc">$ 200</p>
            <p>- 4 Days -</p>
            <p>- Featured -</p>
            <p>- AFFILIATE MARKETTING -</p>
            <Link to="/contact" className="btn">PURCHASE NOW</Link>
        </div>

        <div className="card">
            <h3>- Premium -</h3>
            <span className="bar"></span>
            <p className="btc">$ 300</p>
            <p>- 4 Days -</p>
            <p>- Featured -</p>
            <p>- REACT RESPONSIVE DESIGN -</p>
            <Link to="/contact" className="btn">PURCHASE NOW</Link>
        </div>
        
        <div className="card">
            <h3>- Advance -</h3>
            <span className="bar"></span>
            <p className="btc">$ 400</p>
            <p>- 6 Days -</p>
            <p>- Featured -</p>
            <p>- NODE BACK-END -</p>
            <Link to="/contact" className="btn">PURCHASE NOW</Link>
        </div>
    </div>
  </div>;
};

export default PricingCard;