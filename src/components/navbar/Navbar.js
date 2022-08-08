import React, { useState } from "react";
import "./NavbarStyles.css";
import { GiCheckeredFlag, GiCarWheel } from "react-icons/gi";
import { FaBars, FaFacebook, FaTimes, FaInstagram } from "react-icons/fa";
import {} from "react-icons/gi";

const Navbar = () => {
  // handling side menu toogle icon interaction
  const [click, setClick] = useState(false);
  const [slide, setSlide]=useState(false);

  const handleClick = () =>{
    setClick(!click);
    setSlide(!slide)
  }

  return (
    <div className="navbar">
      <div className="container">
        <div className={slide? "logo slide-right" : "logo"}>
          <h3>
            Horse  <span>
              <GiCheckeredFlag className="logo-icon" />
            </span>Power
           
          </h3>
        </div>
        {/* nav menu */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="/">Power</a>
          </li>
          <li>
            <a href="/">Speed</a>
          </li>
          <li>
            <a href="/">Handling</a>
          </li>
          <li>
            <a href="/">Options</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          {/* mobile appearance section */}
          <div className="mobile-menu">
            <button>Shop</button>
            <button>Account</button>
            <div className="social-icons">
              <FaFacebook  className="icon"/>
              <FaInstagram className="icon" />
              <GiCarWheel className="icon" />
            </div>
          </div>
        </ul>
        <ul className="nav-menu hide">
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/">Account</a>
          </li>
        </ul>
        
        {/* toggle icons */}
        <div className="hamburger-icons" onClick={handleClick}>
            {click ? (<FaTimes className="toggle-icon" />) : (<FaBars className="toggle-icon"/>)} 
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
