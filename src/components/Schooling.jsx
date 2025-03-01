import React from "react";
import Typing from "react-typing-effect";
import profilePic from "../assets/images/hero/profile-picture.png";
import dot from "../assets/images/skills/dot-pattern.svg";
import star from "../assets/images/hero/star.svg";
import "./Schooling.css";

const timeline = [
  {
    yearRange: "Sep-2024 to Feb-2025",
    degree: "Internship - Service now / Full Stack Developer",
    institution: "Dotsito",
  },
  {
    yearRange: "2018 - 2019",
    degree: "SSLC",
    institution: "Sengunthar Vidhyalaya Matriculation School",
  },
  {
    yearRange: "2019 - 2020",
    degree: "HSC",
    institution: "Nandha Matric. Hr. Sec. School",
  },
  {
    yearRange: "2021-2025",
    degree: "B.TECH (AI&DS)",
    institution: "Erode Sengunthar Engineering College",
  },
];

const Schooling = () => {
  return (
    <section className="schooling-area" id="about">
      <div className="schooling-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="profile-section">
          <div className="profile-content">
            <img className="profile-pic" src={profilePic} alt="profile" />
            <div className="profile-info">
              <Typing 
                speed={100} 
                eraseDelay={1000} 
                cursor="|" 
                text="Arul Prakash.V" 
                className="name-typing"
              />
              <div className="role-typing">
                <Typing 
                  speed={100} 
                  eraseDelay={1000} 
                  cursor="|" 
                  text="UI/UX Designer" 
                />
                <Typing 
                  speed={100} 
                  eraseDelay={1000} 
                  text="Graphic Designer" 
                  cursor="|"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="timeline-section">
          <h3 className="timeline-title">Education & Experience</h3>
          <div className="timeline-container">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">{item.yearRange}</span>
                  <h4 className="timeline-degree">{item.degree}</h4>
                  <p className="timeline-school">{item.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schooling;