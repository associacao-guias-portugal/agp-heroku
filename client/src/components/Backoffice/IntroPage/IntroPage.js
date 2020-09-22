import React from 'react';
import './IntroPage.css';
import whiteLogo from '../../../assets/logo/logo_RGB.png';

const IntroPage = () => {

  return (
    <div className="IntroPage">
      <div className="intro-logo-section">
        <img src={whiteLogo} className="intro-logo" alt="AGP" />
      </div>
    </div>
  );
};

export default IntroPage;
