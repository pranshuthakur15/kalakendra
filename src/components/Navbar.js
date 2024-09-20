import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image/logo/Untitled-1.png)` }}>

    <div className="navbar-brand">
    <Link to="/">
    <img src={`${process.env.PUBLIC_URL}/image/logo/icon green.png`} alt="Kala Kendra Logo" className="navbar-logo" />

      </Link>
    </div>
    <ul className="navbar-links">
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/portfolio">PORTFOLIO</Link>
      </li>
      <li>
        <Link to="/about">ABOUT</Link>
      </li>
      <li>
        <Link to="/services">SERVICES</Link>
      </li>
      <li>
        <Link to="/review">REVIEWS</Link>
      </li>
      <li>
        <Link to="/contact">CONTACT</Link>
      </li>
    </ul>
  </nav>
  );
};

export default Navbar;
