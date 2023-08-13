import React from "react";
import { Link } from "react-router-dom";
import './portfolio.css'

function Header() {
  return (
    <div className="header-container">
      <h1>Joe</h1>
      <div>
        <ul className="header-elements">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/education">
            <li>Portfolio</li>
          </Link>
          <Link to="/blogs">
            <li>Blog</li>
          </Link>
          <Link to="/contactus">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      
        <button>Let&apos;s Talk</button>
      
    </div>
  );
}

export default Header;
