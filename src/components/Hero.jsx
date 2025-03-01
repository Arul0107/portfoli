import React from "react";
import { Row, Col, Button } from "antd";
import "./Hero.css";
import pattern from "../assets/images/hero/pattern.png";
import longArrow from "../assets/images/hero/long-arrow.svg";
import stylishArrow from "../assets/images/hero/style-arrow.svg";
import profilePic from "../assets/images/hero/profile-picture.png";
import star from "../assets/images/hero/star.svg";

const Hero = () => {
  return (
    <section className="hero-area" id="home">
      <div className="hero-content">
        <Row align="middle" justify="space-between">
          {/* Text Content */}
          <Col xs={24} md={12} className="hero-text">
            <div className="content-wrapper">
              <h4 className="gradient-subtitle">
                Creative Designer & Developer
              </h4>

              <div className="social-links">
                <div className="animated-arrow">
                  <img src={longArrow} alt="scroll indicator" />
                </div>
                <Button
                  href="https://linkedin.com"
                  className="social-btn linkedin"
                  shape="round"
                >
                  <span>LinkedIn</span>
                </Button>
                <Button
                  href="https://github.com"
                  className="social-btn github"
                  shape="round"
                >
                  <span>GitHub</span>
                </Button>
                <Button
                  href="https://instagram.com"
                  className="social-btn instagram"
                  shape="round"
                >
                  <span>Instagram</span>
                </Button>
              </div>

              <h1 className="animated-heading">
                <span className="highlight">Design</span> Innovator
                <br />& Digital
                <span className="gradient-text"> Creator</span>
              </h1>

<<<<<<< HEAD
                <div className="hero-btn-wrapper">
                  <Button className="theme-btn-one">Hy! I'm Arul</Button>
                  <a href="/arulprakashv0107@gmail.com.pdf" download="Arul_Resume.pdf">
                    <Button className="theme-btn-two">Download CV</Button>
                  </a>
                </div>
=======
              <div className="cta-buttons">
                <Button className="primary-cta" shape="round">
                  Let's Connect
                </Button>
                <a href="/arulprakashv0107.pdf" download="Arul_Resume.pdf">
                  <Button className="secondary-cta" shape="round">
                    Download CV
                  </Button>{" "}
                </a>
>>>>>>> 375d8e0 (Initial commit)
              </div>
            </div>
          </Col>

          {/* Profile Image */}
          <Col xs={24} md={12} className="hero-visual">
            <div className="profile-container">
              <div className="decorative-element pulse-animation">
                <img src={star} alt="decorative star" />
              </div>
              <div className="image-wrapper hover-effect">
                <img
                  src={profilePic}
                  alt="Arul Prakash"
                  className="profile-image"
                />
                {/* <div className="animated-border"></div> */}
              </div>
              <img
                src={stylishArrow}
                alt="decorative arrow"
                className="floating-arrow"
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Hero;
