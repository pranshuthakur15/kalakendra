import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="portfolio">
        <Portfolio />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
