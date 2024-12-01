import React, { useState } from "react";
import { Row, Col, Button, Card, Modal } from "antd";
import { ArrowRightOutlined, NodeExpandOutlined } from "@ant-design/icons";
import "./Portfolio.css";

// Import images
import project1Image from "../assets/images/projects/project-1.png";
import project2Image from "../assets/images/projects/project-3.png";
import project3Image from "../assets/images/projects/project-6.png";
import project4Image from "../assets/images/projects/project-4.png";
import project5Image from "../assets/images/projects/project-7.png";
import project6Image from "../assets/images/projects/project-2.png";
import project7Image from "../assets/images/projects/project-5.png";
import project8Image from "../assets/images/projects/project-8.png";

const projectData = [
  {
    id: 1,
    category: "ui-ux",
    title: "NFT Landing UI",
    description: "App Case Study",
    image: project1Image,
  },
  {
    id: 2,
    category: "graphics-design",
    title: "App Dashboard Design",
    description: "App Case Study",
    image: project2Image,
  },
  {
    id: 3,
    category: "apps-design",
    title: "Business Landing Page",
    description: "App Case Study",
    image: project3Image,
  },
  {
    id: 4,
    category: "web-design",
    title: "NFT Artwork App Design",
    description: "App Case Study",
    image: project4Image,
  },
  {
    id: 5,
    category: "graphics-design",
    title: "Dark Mode App UI Design",
    description: "App Case Study",
    image: project5Image,
  },

  {
    id: 6,
    category: "web-design",
    title: "App UI Design",
    description: "App Case Study",
    image: project7Image,
  },
  {
    id: 7,
    category: "apps-design",
    title: "Gaming Landing Page UI",
    description: "App Case Study",
    image: project8Image,
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("*");

  const handleModalOpen = (project) => {
    setSelectedProject(project);
  };

  const handleModalClose = () => {
    setSelectedProject(null);
  };

  const filterProjects = (category) => {
    if (category === "*") {
      return projectData;
    }
    return projectData.filter((project) => project.category === category);
  };

  return (
    <section id="portfolio" className="project-area pt-135">
      <div className=" port-container">
        <div className="section-title">
          <h2>Latest Project</h2>
          <br />

          <p className="h-p">Best Of Our Works</p>
        </div>

        <div className="section-title-wrapper">
          <div className="project-menu">
            <ul>
              {[
                "*",
                "ui-ux",
                "graphics-design",
                "web-design",
                "react",
                "machine-learning",
              ].map((category) => (
                <li
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "active" : ""}
                >
                  {category === "*" ? "All Project" : category.replace("-", " ")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="portfoli-modal">
  {selectedProject && (
    <Modal
      title={selectedProject.title}
      visible={true}
      onCancel={handleModalClose}
      footer={[""]}
      style={{ backgroundColor: "#222", color: "#fff" }} // Modal background and text color
      bodyStyle={{ backgroundColor: "#222", color: "#fff" }} // Body style for the modal content
      titleStyle={{ color: "#fff" }} // Title style for the modal header
    >
      <img
        src={selectedProject.image}
        alt={selectedProject.title}
        style={{
          width: "100%",
          borderRadius: "8px", // Optional: to give a rounded corner to the image
        }}
      />
      <p style={{ color: "#fff" }}>{selectedProject.description}</p> {/* Description text color */}
    </Modal>
  )}
</div>

      <div className="portfoli-card-main">
        <Row gutter={[19]} className="portfoli-card-main">
          {filterProjects(selectedCategory).map((project) => (
            <Col span={7} key={project.id}>
              <Card
                hoverable
                cover={
                  <img
                    alt={project.title}
                    src={project.image}
                    className="portfolio-image"
                  />
                }
                onClick={() => handleModalOpen(project)}
                className="portfolio-card"
              ></Card>
              <div className="project-title-wrapper">
                <h5>{project.title}</h5>
                <p>{project.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Portfolio;
