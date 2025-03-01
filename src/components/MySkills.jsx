import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import "./MySkills.css";
import skillImage from "../assets/images/skills/skill-area-dark-v.png";
import dotPattern from "../assets/images/skills/dot-pattern.svg";

const skillsData = [
  { id: 1, title: "Figma", percentage: 86 },
  { id: 2, title: "Illustrator", percentage: 73 },
  { id: 3, title: "Photoshop", percentage: 54 },
  { id: 4, title: "React", percentage: 94 }
];

const MySkills = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAnimated(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(document.querySelector(".skills-container"));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-container">
      <div className="skills-content">
        <div className="skills-text">
          <div className="section-header">
            <img src={dotPattern} alt="decoration" className="dot-pattern" />
            <h2>
              <span className="highlight">My</span> Professional
              <br />
              Expertise
            </h2>
          </div>
          
          <div className="skills-grid">
            {skillsData.map((skill) => (
              <div key={skill.id} className="skill-card">
                <div className="skill-header">
                  <h3>{skill.title}</h3>
                  <span className="percentage">{skill.percentage}%</span>
                </div>
                <div className="progress-container">
                  <svg className="progress-circle" viewBox="0 0 100 100">
                    <circle
                      className="progress-background"
                      cx="50"
                      cy="50"
                      r="45"
                    />
                    <circle
                      className="progress-fill"
                      cx="50"
                      cy="50"
                      r="45"
                      style={{
                        strokeDashoffset: animated ? 
                          283 - (283 * skill.percentage) / 100 : 283
                      }}
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-visual">
          <img src={skillImage} alt="Skill visualization" />
          <div className="glow-effect"></div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;