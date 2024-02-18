import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import heroIMG from "../assets/Defi.png";

const Hero = () => {
  return (
    <section className="container hero">
      <div className="hero-content">
        <h1>
          The first <span> decentralized trading</span> protocol
        </h1>
        <p>
          Empower trader, liquidity providers & developers to participate in an
          open financial marketplace with no barriers to entry
        </p>

        <div className="hero-CTA">
          <a href="#">
            <button type="button" className="btn ">
              Launch App
            </button>
          </a>
          <a href="#">
            {" "}
            <FontAwesomeIcon icon={faVideo} className="location-icon" /> Watch
            Video
          </a>
        </div>
      </div>
      <img
        className="hero-img up"
        src={heroIMG}
        alt="representation of defi coins"
      />
    </section>
  );
};

export default Hero;
