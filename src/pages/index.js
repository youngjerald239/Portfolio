import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import Layout from "../layout/Layout"

export default function Blog() {


  return (
    <Layout>
      <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple"> ME </span> 
            </h1>
            <Typewriter
      options={{
        strings: [
          "Full-Stack Developer",
          "Frontend Developer",
          "Backend Developer",
          "Ruby on Rails",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
      <h1 style={{ fontSize: "20px", color: "white" }}>
      Bringing graphic design and customer service skills into my work as a full-stack developer, I bring a
diverse set of skills not many have. Collaborative and analytical, I provide a unique perspective and
focus on the user in all of my projects.
              <br />
              <br />I am fluent in Launguages such as...
              <i>
                <b className="purple"> Ruby, Javascript and jQuery. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Backend and Video game development.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with
              <i>
                <b className="purple"> Modern Javascript Frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Node.js and React.js</b>
              </i> 
            </h1>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={"https://scontent-ort2-2.xx.fbcdn.net/v/t39.1997-6/p160x160/98276302_3092600417468899_688522178542436352_n.png?_nc_cat=110&ccb=1-3&_nc_sid=ac3552&_nc_ohc=MS9wwtZilW8AX_FH5zm&_nc_ht=scontent-ort2-2.xx&tp=30&oh=ff5aa2b3c4263d6ba9752ba56103b093&oe=60D0CC6F"} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/youngjerald239"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Techfalcon27"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jerald-young-232aa720a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/appen.jerald/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
    </Layout>
  )
}
