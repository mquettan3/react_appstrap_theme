/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import Banner from "./banner"
import ContactForm from "./contactForm"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar />
      <Banner />
      <ContactForm />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99595.39781068759!2d-77.61404966409985!3d38.732588017933914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b65e6d089124d7%3A0xc3eb1f305c1fb1ae!2sBristow%2C%20VA!5e0!3m2!1sen!2sus!4v1577847156649!5m2!1sen!2sus" width="600" height="450" frameborder="0" style={{border: "0"}} allowfullscreen=""></iframe>
      <section id="copyright" className="copyright_section">
          <div className="container">
              <p>Copyright © K & D Electric Company LLC. All rights reserved.</p>
              <p>Website developed by <a href="https://www.marcusquettan.com">Marcus Quettan</a></p>
          </div>
      </section>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
