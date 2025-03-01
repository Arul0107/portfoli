import React from "react";
import Slider from "react-slick";
import "./Certificate.css";
import acc from '../assets/images/certificat/acc.png';
import kit from '../assets/images/certificat/kit.png';
import nit from '../assets/images/certificat/nit.png';
import pan from '../assets/images/certificat/pan.png';
import vel from '../assets/images/certificat/vel.png';

const Certificate = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          arrows: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  };

  const certificates = [
    { 
      id: 1, 
      title: "Acculer Media Technology", 
      description: "UI/UX Design Certification", 
      imgSrc: acc 
    },
    { 
      id: 2, 
      title: "KNOWLEDGE INSTITUTE OF TECHNOLOGY", 
      description: "Advanced Design Principles", 
      imgSrc: kit 
    },
    { 
      id: 3, 
      title: "National Institute of Technology. Tiruchirappalli", 
      description: "User Experience Masterclass", 
      imgSrc: nit 
    },
    { 
      id: 4, 
      title: "Pantech", 
      description: "Interactive Design Certification", 
      imgSrc: pan 
    },
    { 
      id: 5, 
      title: "VELALAR COLLEGE OF ENGINEERING AND TECHNOLOGY", 
      description: "Design System Architecture", 
      imgSrc: vel 
    },
  ];

  return (
    <section className="certificates-section">
      <h2 className="section-title">Certifications & Accolades</h2>
      
      <div className="slider-container">
        <Slider {...settings}>
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="card-inner">
                <div className="image-container">
                  <img 
                    src={cert.imgSrc} 
                    alt={cert.title} 
                    className="certificate-image"
                  />
                </div>
                <div className="card-content">
                  <h3 className="certificate-title">{cert.title}</h3>
                  <p className="certificate-description">{cert.description}</p>
                </div>
                <div className="card-glow"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Certificate;