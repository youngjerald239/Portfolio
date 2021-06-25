import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Resumecontent from "../layout/ResumeContent";
import axios from "axios";
import pdf from "../images/jeraldresume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import Layout from "../layout/Layout"
import "../style.css"

export default function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
      <Layout>
    <Container fluid className="resume-section">
      <Container>
        <Row style={{display:"flex", justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="General Assembly"
              date="March 2021 - Present"
              content={[
                "Created different websites and apps, using frontend and backend resources.",
                " Learned how to create servers and deploy them to websites like Heroku.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Pokemon api [General Assembly Lab]"
              content={[
                "Worked on creating the frontend-end of the website using Bootstrap, Javascript.",
              ]}
            />
            <Resumecontent
              title="Adventure Time list app [General Assembly Lab]"
              content={[
                "Operated on developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="General Assembly "
              date="2021 - Present"
              content={[`Currently enrolled`]}
            />
            <Resumecontent
              title="Sanford Brown College [Graphic Design, Associates]"
              date="2007 - 2010"
              content={["Graduated"]}
            />
            <Resumecontent
              title="Saluda High School [Diploma] "
              date="2003 - 2007"
              content={["Graduated"]}
            />
            <h3 className="resume-title">Achivements</h3>
            <Resumecontent
              title="Based on past School and Job Activities"
              content={[
                `NJROTC Petty Officer Second Class`,
                `Created my first game Kitty Crossing`,
                "Completed my first group project Plantie",
              ]}
            />
          </Col>
        </Row>
        <Row style={{display:"flex", justifyContent: "center", position: "relative" }}>
          <Button style={{padding:"5px"}} variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
    </Layout>
  );
}

