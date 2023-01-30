import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/home.mp4' autoPlay loop muted />
      <h1>JCR AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH PROJECT <i className='far fa-play-circle' />
        </Button>
      </div>
      <div>
      <p className='para'>Welcome to JCR Group Limited, where we pride ourselves on building not just structures, but communities. With a team of highly skilled and dedicated professionals, we have been providing top-quality construction services for over a decade. From concept to completion, we work closely with our clients to bring their vision to life, while ensuring the highest levels of safety, quality, and customer satisfaction. Let us help you build something great.</p>
      </div>
    </div>
  );
}

export default HeroSection;
