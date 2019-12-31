// import { Link } from "gatsby"
import React, { useState } from "react"

// Icons
import { Icon } from 'react-icons-kit';
import { caretDown, home, bars } from 'react-icons-kit/fa';

import "../assets/styles/main.scss"

export default function Header() {
  const [isMenuIconClicked, setMenuIconClicked] = useState(false);
  const [isServicesClicked, setServicesClicked] = useState(false);

  return (
    <nav className="navbar scrolled">
      <div className="container">
        <div className="title"><a href="#"><h1>K&D Electric Company</h1></a><div className="divider"></div><span className="subtitle">703-335-0654</span></div>
        <div>
          <a role="button" tabIndex="0" className="nav-menu-icon" onClick={() => setMenuIconClicked(!isMenuIconClicked)} onKeyPress={() => setMenuIconClicked(!isMenuIconClicked)}><Icon size={26} icon={bars}></Icon></a>
          <ul className={"nav-menu " + (isMenuIconClicked ? "show" : "")}>
            <li><a href="#"><Icon size={26} icon={home}></Icon></a></li>
            <li>
              <a role="button" tabIndex="0" onClick={() => setServicesClicked(!isServicesClicked)} onKeyPress={() => setServicesClicked(!isServicesClicked)}>Services <Icon size={15} icon={caretDown}></Icon></a>
              <ul className={"dropdown-menu " + (isServicesClicked ? "show" : "")}>
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
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
