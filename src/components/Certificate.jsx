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
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3, // For large screens, show 3 cards
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // For tablets, show 2 cards
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // For mobile screens, show 1 card
        },
      },
    ],
  };

  const certificates = [
    { id: 1, title: "Acculer Media Technology", description: "Description of Certificate 1", imgSrc: acc },
    { id: 2, title: "KNOWLEDGE INSTITUTE OF TECHNOLOGY", description: "Description of Certificate 2", imgSrc: kit },
    { id: 3, title: "National Institute of Technology. Tiruchirappalli", description: "Description of Certificate 3", imgSrc: nit },
    { id: 4, title: "Pantech", description: "Description of Certificate 4", imgSrc: pan },
    { id: 5, title: "VELALAR COLLEGE OF ENGINEERING AND TECHNOLOGY", description: "Description of Certificate 5", imgSrc: vel },
  ];

  return (
    <div className="certificate-slider-container">
      <Slider {...settings}>
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <img src={cert.imgSrc} alt={cert.title} className="certificate-image" />
            <h2>{cert.title}</h2> {/* No need for inline style for capitalization */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Certificate;
