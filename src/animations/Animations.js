import React from 'react';

const Animations = () => {
  // Animations
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.animate-hero', {
    duration: 0.4,
    opacity: 0,
    y: -150,
    stagger: 0.3,
  });

  gsap.from('.animate-services', {
    scrollTrigger: '.animate-services',
    duration: 0.4,
    opacity: 0,
    x: -150,
    stagger: 0.12,
  });

  gsap.from('.animate-img', {
    scrollTrigger: '.animate-services',
    duration: 1.2,
    opacity: 0,
    x: -200,
  });

  gsap.from('.animate-membership', {
    scrollTrigger: '.animate-membership',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.13,
    delay: 0.5,
  });

  gsap.from('.animate-card', {
    scrollTrigger: '.animate-card',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.1,
    delay: 0.2,
  });

  gsap.from('.animate-team', {
    scrollTrigger: '.animate-team',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.2,
  });

  gsap.from('.animate-email', {
    scrollTrigger: '.animate-email',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.25,
    delay: 0.8,
  });

  return <div></div>;
};

export default Animations;
