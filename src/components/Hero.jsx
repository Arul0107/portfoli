import React from "react";
import { Row, Col, Button } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  DownloadOutlined
} from "@ant-design/icons";
import "./Hero.css";
import stylishArrow from "../assets/images/hero/style-arrow.svg";
import profilePic from "../assets/images/hero/Arulpro.jpg";
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

              <h1 className="animated-heading">
                <span className="highlight">Design</span> Innovator
                <br />& Digital <span className="gradient-text"> Creator</span>
              </h1>

              <div className="cta-buttons">
  <Button
    type="primary"
    shape="round"
    icon={<LinkedinOutlined />}
    size="large"
    href="https://www.linkedin.com/in/arulprakash-v-4b537826a/"
    target="_blank"
    rel="noopener noreferrer"
    className="cta-button linkedin"
  >
    LinkedIn
  </Button>

  <Button
    type="default"
    shape="round"
    icon={<GithubOutlined />}
    size="large"
    href="https://github.com/Arul0107"
    target="_blank"
    rel="noopener noreferrer"
    className="cta-button github"
  >
    GitHub
  </Button>

  <a
    href="/arulprakashv0107@gmail.com.pdf"
    download
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none' }}
  >
    <Button
      type="dashed"
      shape="round"
      icon={<DownloadOutlined />}
      size="large"
      className="cta-button resume"
    >
      Download Resume
    </Button>
  </a>
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
              </div>
              <div className="animated-border"></div>
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
