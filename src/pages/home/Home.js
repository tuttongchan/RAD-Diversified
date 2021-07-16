import React from 'react';
import './home.css';
import Header from '../../components/header/Header';
import About from '../../components/about/About';
import Testimonials from '../../components/testimonials/Testimonials';
import Cards from '../../components/cards/Cards';

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Testimonials />
      <Cards />
    </div>
  );
};

export default Home;
