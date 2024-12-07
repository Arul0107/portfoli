import React, { useState } from "react";
import { Row, Col, Button, Card, Modal } from "antd";
import { ArrowRightOutlined, NodeExpandOutlined } from "@ant-design/icons";
import "./Portfolio.css";
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
    category: "Graphics-design",
    title: "Crunchy Bites",
    description: [
      "Local shop app for seamless snack orders",
      "Focus on user-friendly design and navigation",
      "Vibrant visuals for an engaging experience",
      "Tailored features for local customer convenience",
      "Efficient purchase process for quick access"
    ],
    image: project2Image
  },
  {
    id: 2,
    category: "React",
    title: "Weather Prediction",
    description: "A simple weather prediction app built using the MERN stack.",
    image: project3Image,
  },
  {
    id: 3,
    category: "Web-design",
    title: "NEURO KNOT",
    description: "A college symposium website built with web design technologies.",
    image: project4Image,
    demoLink: "https://neuroknot--2k24.web.app/",
  },
  {
    id: 4,
    category: "Graphics-design",
    title: "HR Dashboard",
    description: "HR management dashboard designed for managing employee data.",
    image: project5Image,
  },
  {
    id: 5,
    category: "React",
    title: "Local Nest",
    description: "A MERN stack-based app for local business management.",
    image: project7Image,
  },
  {
    id: 6,
    category: "Fun",
    title: "M2M",
    description: "React-based fun game.",
    image: project8Image,
    demoLink: "https://m2m-fun.netlify.app/"
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

  const renderDescription = (description) => {
    if (Array.isArray(description)) {
      return (
        <ul>
          {description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      );
    }
    return <p>{description}</p>;
  };

  return (
    <section id="portfolio" className="project-area pt-135">
      <div className="port-container">
        <div className="section-title">
          <h2>Latest Projects</h2>
          <p className="h-p">Best of Our Works</p>
        </div>

        <div className="section-title-wrapper">
          <div className="project-menu">
            <ul>
              {[
                "*",
                "Graphics-design",
                "Web-design",
                "React",
                "Machine-learning",
                "Fun"
              ].map((category) => (
                <li
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "active" : ""}
                >
                  {category === "*" ? "All Projects" : category.replace("-", " ")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {selectedProject && (
        <Modal
          title={selectedProject.title}
          visible={true}
          onCancel={handleModalClose}
          footer={null}
          style={{ backgroundColor: "#222", color: "#fff" }}
          bodyStyle={{ backgroundColor: "#222", color: "#fff" }}
          titleStyle={{ color: "#fff" }}
        >
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            style={{
              width: "100%",
              borderRadius: "8px",
            }}
          />
          {renderDescription(selectedProject.description)}
        </Modal>
      )}

      <div className="portfolio-card-main">
        <Row gutter={[16, 16]}>
          {filterProjects(selectedCategory).map((project) => (
            <Col xs={24} sm={12} md={8} key={project.id}>
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
              >
                <div className="project-title-wrapper">
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                  {project.demoLink && (
                  <Button
                    type="link"
                    href={project.demoLink}
                    target="_blank"
                    icon={<ArrowRightOutlined/>}
                    style={{ padding: "0", fontSize: "14px", color: "#fff" }}
                  >
                    View Demo
                  </Button>
                )}
                </div>
               
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Portfolio;
