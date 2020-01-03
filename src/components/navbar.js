// import { Link } from "gatsby"
import React, { useState, useEffect } from "react";
import smoothscroll from 'smoothscroll-polyfill';

import useEventListener from "../hooks/eventListener";

// Icons
import { Icon } from 'react-icons-kit';
import { caretDown, home, bars, mapMarker } from 'react-icons-kit/fa';

import "../assets/styles/main.scss"

export default function Header( { isMenuIconClicked, setMenuIconClicked, handleNavMenuItemClick }) {
  const [isServicesClicked, setServicesClicked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  const handleScroll = (e) => {
    if (e.currentTarget.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  const handleResize = (e) => {
    if((window.innerWidth > 1450) && isMenuIconClicked) {
      setMenuIconClicked(false);
    }
  }

  useEventListener("scroll", handleScroll);
  useEventListener("resize", handleResize);

  return (
    <nav className={"navbar " + (isScrolled ? "scrolled" : "")}>
      <div className="container">
        <div className="title"><a href="#home" onClick={handleNavMenuItemClick}><h1>K&D Electric Company</h1></a><div className="divider"></div><a href="tel:703-335-0654" className="subtitle">703-335-0654</a></div>
        <a className="location-title" href="#location" onClick={handleNavMenuItemClick}><Icon size={30} icon={mapMarker}></Icon><h2>Bristow, Virginia</h2></a>
        <div>
          <a role="button" tabIndex="0" className="nav-menu-icon" onClick={() => setMenuIconClicked(!isMenuIconClicked)} onKeyPress={() => setMenuIconClicked(!isMenuIconClicked)}><Icon size={26} icon={bars}></Icon></a>
          <ul className={"nav-menu " + (isMenuIconClicked ? "show" : "")}>
            <li><a href="#home" onClick={handleNavMenuItemClick}><Icon size={26} icon={home}></Icon></a></li>
            <li>
              <a role="button" tabIndex="0" onClick={() => setServicesClicked(!isServicesClicked)} onKeyPress={() => setServicesClicked(!isServicesClicked)}>Services <Icon size={15} icon={caretDown}></Icon></a>
              <ul className={"dropdown-menu " + ((isServicesClicked && isMenuIconClicked) ? "show" : "")}>
                <li><a href="#">Commercial Electrical Wiring</a></li>
                <li><a href="#">Commercial Electrician</a></li>
                <li><a href="#">Commercial Exterior Lighting</a></li>
                <li><a href="#">General Electrician</a></li>
                <li><a href="#">Home Electrical Wiring</a></li>
                <li><a href="#">Home Electrician</a></li>
                <li><a href="#">Home Exterior Lighting</a></li>
                <li><a href="#">Recessed Lighting Installation</a></li>
                <li><a href="#">Electrical Wiring</a></li>
                <li><a href="#">Circuit Breaker Replacement</a></li>
              </ul>
            </li>
            <li><a href="#aboutus" onClick={handleNavMenuItemClick}>About Us</a></li>
            <li><a href="#contactus" onClick={handleNavMenuItemClick}>Contact Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
