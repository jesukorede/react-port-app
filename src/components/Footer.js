import "./FooterStyles.css";
import React from "react";
import {FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, FaTiktok} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                  <FaHome size={20} style={{color:
                  "#fff", marginRight: "2rem" }} />
                  <div>
                    <p>I Stay  At Ikorodu, Because I'm A Student At Laspotech </p>
                    <p>First Gate, Ikorodu Lagos</p>
                  </div>
                </div>
                  <div className="phone">
                    <h4><FaPhone 
                    size={20} 
                    style={{color: "#fff", 
                    marginRight: "2rem" }}
                       />
                    +2347059391767
                    </h4>
                  </div>
                  <div className="email">
                    <h4>
                      <FaMailBulk
                        size={20}
                        style={{color: "#fff",
                        marginRight: "2rem" }}
                      />
                      benjaminjesukorede@gmail.com
                    </h4>
                  </div>
            </div>

            <div className="right">
              <h4>About Benjamin?</h4>
              <p>I Study BackEnd Development At Webcity Lagos Ikeja,CEO Of Icoms Digital & A Student at Laspotech Ikorodu Lagos.</p>
              <div>
                <FaFacebook
                size={30}
                style={{color: "#fff",
                marginRight: "1rem" }}
                />
                <FaTiktok
                size={30}
                style={{color: "#fff",
                marginRight: "1rem" }}
                />
                <FaInstagram
                size={30}
                style={{color: "#fff",
                marginRight: "1rem" }}
                />

              </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;