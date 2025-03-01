import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import MySkills from './components/MySkills';
import Schooling from './components/Schooling';
import Certificate from './components/Certificate';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';  // Make sure this file has no unwanted global styles causing black screen
import './responsive.css';  // Make sure this file has no unwanted global styles causing black screen
// import './style.css';  // Make sure this file has no unwanted global styles causing black screen
import { ContactsFilled } from '@ant-design/icons';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app-container">  {/* Add a class here to ensure styling */}
      <Navbar />
      <Hero />
      {/* <Experience /> */}
      <Portfolio />
      <Schooling />
      <MySkills />
      <Certificate />
      {/* <ContactPage/> */}
      <Footer/>
    </div>
  );
}

export default App;
