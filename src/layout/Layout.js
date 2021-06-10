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
      <Container fluid className="footer">
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">
      <img src={"https://scontent-ort2-2.xx.fbcdn.net/v/t39.1997-6/p160x160/98174198_244097157028493_9019087075676258304_n.png?_nc_cat=107&ccb=1-3&_nc_sid=ac3552&_nc_ohc=mL72OGA9cOYAX-2qwgw&_nc_ht=scontent-ort2-2.xx&tp=30&oh=3ca6bdcf8b5b5fe656ec00de4a734366&oe=60D3608F"} className="img-fluid logo" alt="brand" /></Navbar.Brand>
    <Nav className="nav">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="/blog">Games</Nav.Link>
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/youngjerald239"
                style={{ color: "white" }}
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/Techfalcon27"
                style={{ color: "white" }}
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/jerald-young-232aa720a/"
                style={{ color: "white" }}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/appen.jerald/"
                style={{ color: "white" }}
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        
    </Nav>
  </Navbar>
  </Container>

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
                style={{ color: "white" }}
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/Techfalcon27"
                style={{ color: "white" }}
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/jerald-young-232aa720a/"
                style={{ color: "white" }}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/appen.jerald/"
                style={{ color: "white" }}
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
