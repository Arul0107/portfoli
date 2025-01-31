import React from 'react';
import { Row, Col } from 'antd';
import CountUp from 'react-countup';
import './Experience.css';

// Example JSON data for counters
const experienceData = [
  { id: 1, value: 10, label: 'Project Complete' },
  { id: 3, value: 12, label: 'Certificate' },
  { id: 4, value: 5, label: 'Internships' },
];

const Experience = () => {
  return (
    <section className="experience-area">
      <div className="experience-container">
        <h2 className="section-title">Professional Experience</h2>
      </div>
      <Row gutter={[32, 32]} justify="center">
        {experienceData.map(item => (
          <Col xs={24} sm={12} md={6} key={item.id} className="counter-item">
            <h3>
              <CountUp
                start={0}
                end={item.value}
                duration={2}
                decimals={item.value % 1 === 0 ? 0 : 1}  // Handling decimal places dynamically
              />
            </h3>
            <p className="label">{item.label}</p>
          </Col>
        ))}
      </Row>
      <hr className="hr" />
    </section>
  );
};

export default Experience;
