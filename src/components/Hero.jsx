import React from 'react';
import { Row, Col, Button } from 'antd'; // Import Ant Design components
import './Hero.css';
// Import images
import pattern from '../assets/images/hero/pattern.png';
import longArrow from '../assets/images/hero/long-arrow.svg';
import stylishArrow from '../assets/images/hero/style-arrow.svg';
import profilePic from '../assets/images/hero/profile-picture.png';
import star from '../assets/images/hero/star.svg';

const Hero = () => {
  return (
    <section className="hero-area" id="home">
      <div className="container">
        <Row align="middle" justify="center">
          {/* Left Side: Text and Buttons */}
          <Col xs={24} md={12} className="text-center text-md-left">
            <div className="hero-info-wrapper">
              <div className="hero-info-inner">
                <h4>Check Out My</h4>

                <div className="social-media-wrapper">
                  <div className="social-button">
                    <img className="long-arrow" src={longArrow} alt="long arrow" />
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      className="bg-blue text-light-blue rounded-pill"
                    >
                      Linkedin
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      className="bg-maroon text-rose rounded-pill"
                    >
                      Github
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="bg-dark-yellow text-yellow rounded-pill"
                    >
                      Instagram
                    </a>
                  </div>
                </div>

                <div className="hero-title-heading-wrapper">
                  <h1>
                    <span>I Design</span> & Build <br />Unique Products
                  </h1>
                </div>

                <div className="hero-btn-wrapper">
                  <Button className="theme-btn-one">Hy! I'm Arul</Button>
                  <Button className="theme-btn-two">Download CV</Button>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Side: Profile Image and Other Elements */}
          <Col xs={24} md={12} className="text-center">
            <div className="profile">
              <img className="stylish-arrow" src={stylishArrow} alt="stylish arrow" />
              <img className="profile-pic" src={profilePic} alt="profile picture" />
              <img className="stylish-star" src={star} alt="stylish star" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Hero;
