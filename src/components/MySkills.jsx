import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import "./MySkills.css";

import skillImage from "../assets/images/skills/skill-area-dark-v.png"; // Update with your image path
import dot from "../assets/images/skills/dot-pattern.svg"; // Update with your image path
const skillsData = [
  {
    id: 1,
    title: "Figma",
    percentage: 86,
  },
  {
    id: 2,
    title: "Illustrator",
    percentage: 73,
  },
  
  {
    id: 3,
    title: "Photoshop",
    percentage: 54,

  },
  {
    id: 4,
    title: "React",
    percentage: 94,
  },
];

const MySkills = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger animation when the component is mounted
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Delay before triggering animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="Skills" className="skills-area pt-95">
    <div className="skills-wrapper">
      <Row gutter={24} justify="center" align="middle">
        {/* Left Column: Skill Descriptions and Progress */}
        <Col xl={12} md={12} sm={24} xs={24}>
          <div className="skills-info">
            <div className="section-title-wrapper">
              <span className="hr">
                {" "}
                <img src={dot} alt="skills" className="img-dot" />
              </span>
              <h2 className="skill-h1">MyProfessional</h2>
            </div>
            <h5 className="skills-heading">
              Background Skills<br />And Accomplishments
            </h5>
  
            <div className="skills-progress-wrapper">
              {skillsData.map((skill) => (
                <div key={skill.id} className="skills pe-xl-5 me-xl-5">
                  <div className="skill-text">
                    <p>{skill.title}</p>
                    <p>
                      <span>{skill.percentage}</span>%
                    </p>
                  </div>
                  <div className="progress-bg-line">
                    <div
                      className="progress-animated-line"
                      style={{
                        width: `${skill.percentage}%`,
                        animation: isLoaded
                          ? "progressBar 2s ease-out forwards"
                          : "none",
                        "--progress-width": `${skill.percentage}%`, // Dynamically set width
                      }}
                    >
                      <span></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>
  
        {/* Right Column: Image Section */}
        <Col xl={12} md={12} sm={24} xs={24}>
          <div className="skill-img-btn-wrapper position-relative">
            <img src={skillImage} alt="skills" className="img-fluid" />
          </div>
        </Col>
      </Row>
    </div>
  </section>
  

  );
};

export default MySkills;
