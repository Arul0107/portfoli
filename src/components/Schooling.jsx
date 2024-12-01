import React from "react";
import "./Schooling.css";
import profilePic from "../assets/images/hero/profile-picture.png";

// Importing images directly
import dot from "../assets/images/skills/dot-pattern.svg"; // Update with your image path
import lineShape from "../assets/images/schooling/style-1.png";
import star from "../assets/images/hero/star.svg";

const timeline = [
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
    degree: "B.TECH (AI&DS) ",
    institution: "Erode Sengunthar Engineering College",
  },
  {
    yearRange: "2025 - Present",
    degree: "Internship - Service now / Full Stack Developer",
    institution: "Dotsito",
  },
];

const Schooling = () => {
  return (
    <section className="schooling-area mt-95" id="about">
      <div className="container">
        <h2 className="section-title">About</h2>
      </div>

      <div className="container-wrapper">
        <div className="personal-iden">
          <img className="profile-pic" src={profilePic} alt="profile picture" />
          <div className="personal-info">
            <h2  className="schol-h2" >Arul Prakash V</h2>
            
          </div>
        </div>
        
        <div className="container">
          <div className="section-title-wrapper">
            <span className="hr-tit">
              <img src={dot} alt="skills" className="img-dot" />
            </span>
            <h2 className="schol-h2">Schooling & Experience</h2>
          </div>

          <div className="row">
            <img className="stylish-star" src={star} alt="stylish star" />

            <div className="timeline-wrapper col-lg-6 col-md-6">
              <div className="timeline">
                {timeline.map((entry, index) => (
                  <div key={index} className="timeline-item-wrapper">
                    <span className="circle">
                      <span></span>
                    </span>
                    <p className="years">{entry.yearRange}</p>
                    <div className="experience-details">
                      <h4>{entry.degree}</h4>
                      <p>{entry.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <img src={dot} alt="skills" className="img-dot" />
          </div>
        </div>
      </div>
      <div className="extra-div"></div>
    </section>
  );
};

export default Schooling;
