import React, { useState } from 'react';
import './navbar.css';
import mainlogo from '../assets/LeetCode_logo_black.svg';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
  };

  return (
    <nav>
      <div className="logo">
        <img src={mainlogo} alt="Logo Image" />
      </div>
      <div className={`hamburger ${isNavOpen ? 'toggle' : ''}`} onClick={handleHamburgerClick}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>

      <ul className={`nav-links ${isNavOpen ? 'open' : ''}`}>
        <li><a href="explore">Explore</a></li>
        <li><a href="problems">Problems</a></li>
        <li className='dropdown'><button href="interview" className='dropbtn'>Interview </button>
        <div className='dropdown-content'>
            <a href="online-interview">Online Interview</a>
            <a href="assessment">Assessment</a>
        </div>
        </li>
        <li><a href="contest">Contest</a></li>
        <li><a href="discuss">Discuss </a></li>
        <li className='dropdown-store'><button href="store" className='dropbtn-store'>Store </button>
        <div className='dropdown-content-store'>
            <a href="redeem">Redeem</a>
            <a href="premium">Premium</a>
        </div>
        </li>
      </ul>
      <ul className='premium-btn'>
        <li><button className="join-button"> <i class="fa fa-star" aria-hidden="true"></i> Premium</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;