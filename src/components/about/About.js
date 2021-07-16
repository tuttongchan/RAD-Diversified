import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div className="about-container" id="about">
        <div className="iframe-container">
          <iframe
            // width="560"
            // height="315"
            className="youtube-video"
            // width="720"
            width="680"
            height="455"
            src="https://www.youtube.com/embed/Hg-ZxbGXAuo?wmode=transparent"
            title="YouTube video player"
            wmode="Opaque"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="about-desc-container">
          <h2 className="about-first-heading">Real Estate Investing</h2>
          <h1 className="about-second-heading">Done Right & For You</h1>
          <div className="about-line"></div>
          <p className="about-first-desc">
            We have developed a proven, reliable system for investing in
            residential & multi-family properties in key real estate markets
            across the U.S. We offer investment partners the opportunity to
            invest in cash-flowing properties with substantial value-add
            opportunities.
          </p>
          <p className="about-second-desc">
            <b>RAD Diversified</b> offers monthly distributions, a 5%
            bottom-line guarantee and has kept its entire staff employed while
            keeping the doors open without taking any government assistance
            during the COVID-19 pandemic
          </p>
          <Link to="/invest-now">
            <button className="hero-button">
              Invest Now<i class="fas fa-long-arrow-alt-right"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
