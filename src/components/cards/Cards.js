import React from 'react';
import './cards.css';
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <div className="cards-container">
      <div className="cards-heading-container">
        <h2 className="about-first-heading">Properties</h2>
        <h1 className="about-second-heading">Our Most Recent Projects</h1>
        <div className="about-line"></div>
      </div>
      <div class="grid">
        <div class="column">
          <div className="house-image-container">
            <img
              src="https://images.unsplash.com/photo-1602075432748-82d264e2b463?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
            <h1>Philadelphia Property</h1>
            <i class="far fa-images"></i>
          </div>
          <div className="house-desc-container">
            <span>Purchase $21,000</span>
            <span>Rehab $120,000</span>
            <span>After Repair Value $189,000</span>
            <span>Rented for $2,200/Month</span>
          </div>
        </div>
        <div class="column">
          <div className="house-image-container">
            <img
              src="https://images.unsplash.com/photo-1551524164-687a55dd1126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80"
              alt=""
            />
            <h1>The Survivalist Project</h1>
            <i class="far fa-images"></i>
          </div>
          <div className="house-desc-container">
            <span>Purchase $1,500,000</span>
            <span>Rehab $4,500,000</span>
            <span>Currently Taking Applications</span>
            <span>In Progress</span>
          </div>
        </div>
        <div class="column">
          <div className="house-image-container">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
              alt=""
            />
            <h1>Texas Property</h1>
            <i class="far fa-images"></i>
          </div>
          <div className="house-desc-container">
            <span>Purchase $145,000</span>
            <span>Rehab N/A</span>
            <span>After Repair Value $280,000</span>
            <span>Rented at $1,400/Month</span>
          </div>
        </div>
        <div class="column">
          <div className="house-image-container">
            <img
              src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
              alt=""
            />
            <h1>Philadelphia Property</h1>
            <i class="far fa-images"></i>
          </div>
          <div className="house-desc-container">
            <span>
              {/* <i class="fas fa-dollar-sign"></i>  */}
              Purchase $59,000
            </span>
            <span>
              {/* <i class="fas fa-tools"></i> */}
              Rehab $15,000
            </span>
            <span>
              {/* <i class="fas fa-money-bill"></i>  */}
              After Repair Value $185,000
            </span>
            <span>
              {/* <i class="fas fa-sync-alt"></i> */}
              Rented at $1,000/Month
            </span>
          </div>
        </div>
      </div>
      <div className="get-started-container">
        <h2 className="about-first-heading">GET STARTED</h2>
        <h1 className="about-second-heading">
          Get Started With RAD Diversified Today
        </h1>
        <div className="about-line"></div>
        <Link to="/invest-now">
          <button className="hero-button">
            Invest Now<i class="fas fa-long-arrow-alt-right"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
