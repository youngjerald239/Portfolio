import React, { useState } from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import "../style.css"
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from "react-bootstrap"
import { Container, Row, Col } from "react-bootstrap";

const Layout = props => {
  let date = new Date();
  let year = date.getFullYear();
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  
  return (
    <>
      
      <Navbar bg="dark" variant="dark">
    <Nav className="nav">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="/blog">Games</Nav.Link>
      <Nav.Link href="/resume">Resume</Nav.Link>
          <ul className="footer-icons">
            <li className="social-icons">
              <a  
                href="https://github.com/youngjerald239"
                style={{ color: "yellow" }}
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/JeraldYoung19"
                style={{ color: "yellow" }}
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/jerald-young-232aa720a/"
                style={{ color: "yellow" }}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/appen.jerald/"
                style={{ color: "yellow" }}
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        
    </Nav>
  </Navbar>
  

  <main className="main">{props.children}</main>   
  <Container fluid className="footer">
      <Row>
      <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Jerald Young</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} JY</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/youngjerald239"
                style={{ color: "yellow" }}
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/JeraldYoung19"
                style={{ color: "yellow" }}
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/jerald-young-232aa720a/"
                style={{ color: "yellow" }}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/appen.jerald/"
                style={{ color: "yellow" }}
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Layout
