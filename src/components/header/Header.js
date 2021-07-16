import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Topbar from '../topbar/Topbar';

const Header = () => {
  return (
    <header>
      <Topbar />
      <div className="hero-content-container animate-hero">
        <div className="hero-top-container">
          <div className="hero-socials-container">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/raddiversified/"
                  target="_blank"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/taxauctioninvestors/"
                  target="_blank"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UC3YSsFzsXLksebTwZtxL97Q"
                  target="_blank"
                >
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="hero-heading-container">
            <div className="orange-line"></div>
            <h1>
              Invest In The Most Lucrative Real Estate <br /> Market Created By
              COVID-19
            </h1>
          </div>
        </div>

        <div className="hero-bottom-container">
          <div className="hero-paragraph-container">
            <p>
              Specializing in Tax Lien & Tax Deed Investing, RAD Diversified
              made a 36.7% annualized return in 2020 and has cleared 33.514% in
              the past 12 months. Invest in the Creation, Protection &
              Preservation of Your Wealth. Enter Your Information Below To Get
              Started, Today!
            </p>
          </div>
          <Link to="/invest-now">
            <button className="hero-button">
              Invest Now<i class="fas fa-long-arrow-alt-right"></i>
            </button>
          </Link>

          <div className="hero-metrics-container">
            <div className="hero-metric-container">
              <span className="hero-metric-number">$ 1,000</span>
              <span className="hero-metric-span">Minimum Investment</span>
            </div>
            <div className="hero-metric-container">
              <span className="hero-metric-number">$ 15.66</span>
              <span className="hero-metric-span">Current Share Price</span>
            </div>
            <div className="hero-metric-container">
              <span className="hero-metric-number">$ 15.2 M</span>
              <span className="hero-metric-span">Raised Capital</span>
            </div>
          </div>
        </div>
      </div>

      <div class="scroll-down-container bounce">
        <a href="#about">
          <i className="fa fa-arrow-down fa-2x"></i>
          <span>Scroll</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
