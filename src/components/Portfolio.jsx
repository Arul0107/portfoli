import React, { useState } from "react";
import { Row, Col, Card, Modal, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./Portfolio.css";

// Project Images
import project2Image from "../assets/images/projects/project-3.png";
import project3Image from "../assets/images/projects/project-6.png";
import project4Image from "../assets/images/projects/project-4.png";
import project5Image from "../assets/images/projects/project-7.png";
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
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    "Graphics-design",
    "Web-design",
    "React",
    "Machine-learning",
    "Fun"
  ];

  const filterProjects = (category) => {
    if (category === "all") return projectData;
    return projectData.filter(project => project.category === category);
  };

  const renderDescription = (description) => {
    if (Array.isArray(description)) {
      return (
        <ul className="description-list">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p className="description-text">{description}</p>;
  };

  return (
    <section id="project" className="portfolio-section">
      <div className="portfolio-header">
        <h2 className="section-title">Latest Projects</h2>
        <p className="section-subtitle">Best of Our Works</p>
        
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.replace("-", " ")}
            </button>
          ))}
        </div>
      </div>

      <div className="portfolio-grid">
        <Row gutter={[14, 24]}>
          {filterProjects(selectedCategory).map(project => (
            <Col key={project.id} xs={24} sm={12} lg={8} xl={6}>
              <Card
                hoverable
                className="project-card"
                cover={
                  <div className="card-image-container">
                    <img
                      alt={project.title}
                      src={project.image}
                      className="project-image"
                    />
                    <div className="image-overlay">
                      <Button
                        type="primary"
                        shape="round"
                        onClick={() => setSelectedProject(project)}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                }
              >
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  {project.demoLink && (
                    <Button
                      type="link"
                      href={project.demoLink}
                      target="_blank"
                      icon={<ArrowRightOutlined />}
                      className="demo-link"
                    >
                      Live Demo
                    </Button>
                  )}
                </div>
                <h3 className="project-title">{project.title}</h3>
              
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <Modal
        visible={!!selectedProject}
        onCancel={() => setSelectedProject(null)}
        footer={null}
        className="project-modal"
        width="90%"
        centered
      >
        {selectedProject && (
          <div className="modal-content">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="modal-image"
            />
            <div className="modal-details">
              <h2>{selectedProject.title}</h2>
              <div className="project-info">
                <span className="project-category">
                  {selectedProject.category}
                </span>
                {selectedProject.demoLink && (
                  <Button
                    type="primary"
                    href={selectedProject.demoLink}
                    target="_blank"
                    icon={<ArrowRightOutlined />}
                  >
                    Visit Live Demo
                  </Button>
                )}
              </div>
              <div className="project-description">
                {renderDescription(selectedProject.description)}
              </div>
             
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Portfolio;