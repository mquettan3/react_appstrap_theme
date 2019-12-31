import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// Icons
import { Icon } from 'react-icons-kit';
import { caretDown, home } from 'react-icons-kit/fa';

import "../assets/styles/main.scss"

const Header = () => (
  <nav className="navbar scrolled">
    <div className="container">
      <a>K&D Electric Company</a>
      <ul>
        <li><a style={{padding: "30px 14px"}}><Icon size={26} icon={home}></Icon></a></li>
        <li>
          <a>Services <Icon size={15} icon={caretDown}></Icon></a>
          <ul className="dropdown-menu">
            <li><a>Commercial Electrical Wiring</a></li>
            <li><a>Commercial Electrician</a></li>
            <li><a>Commercial Exterior Lighting</a></li>
            <li><a>General Electrician</a></li>
            <li><a>Home Electrical Wiring</a></li>
            <li><a>Home Electrician</a></li>
            <li><a>Home Exterior Lighting</a></li>
            <li><a>Recessed Lighting Installation</a></li>
            <li><a>Electrical Wiring</a></li>
            <li><a>Circuit Breaker Replacement</a></li>
          </ul>
        </li>
        <li><a>About Us</a></li>
        <li><a>Contact Us</a></li>
      </ul>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
