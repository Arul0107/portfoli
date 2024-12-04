import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import MySkills from './components/MySkills';
import Schooling from './components/Schooling';

const App = () => {
  return (
    <div >
      <Navbar /> 
      <Hero/>
      <Experience/>
      <Portfolio/>
      <Schooling/>
      <MySkills/>
    </div>
  );
}

export default App;
