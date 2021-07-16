import React from 'react';
import './topbar.css';
import { Link } from 'react-router-dom';
import logo from '../../images/rad-logo.png';

const Topbar = () => {
  return (
    <div>
      <nav>
        <div class="navbar-container">
          <div className="logo-container">
            {/* <img src={logo} alt="Omnifood logo" class="logo" /> */}
          </div>
          <div className="nav-list-container">
            <ul class="nav-list">
              <Link className="link">
                <li>
                  <a href="">(813) 401-3062</a>
                </li>
              </Link>
              <Link className="link" to="/how-it-works">
                <li>
                  <a href="">How it Works</a>
                </li>
              </Link>
              <Link className="link" to="the-principals">
                <li>
                  <a href="">The Principals</a>
                </li>
              </Link>
              <Link className="link" to="faq">
                <li>
                  <a href="">FAQ</a>
                </li>
              </Link>
              <Link className="link" to="sec">
                <li>
                  <a href="">SEC Filing</a>
                </li>
              </Link>

              {/* <input
                type="text"
                id="search"
                class="search"
                placeholder="Search"
              /> */}
              <li>
                <a href="#plans">
                  <i class="fas fa-search"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
