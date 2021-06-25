import React from "react"
import Layout from "../layout/Layout"
import projects from "../json/projects.json"
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import { Container, Row, Col } from "react-bootstrap";
import project from "../json/projects.json"
import "../style.css"
export default function Projects() {
  

  return (
    <Layout>
      <h1 style={{textAlign:"center"}}>My Projects</h1>
    <div className="projectsContainer">
      {projects.map((project => {
        return (<div>
          <Container fluid className="project-section"> 
      <Container>  
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          <Card className="project-card-view"  style={{borderRadius:"33px"}}>
      <Card.Img className="card-img-top" style={{borderRadius:"33px", overflow:"hidden"}} variant="top" src={project.image} alt="card-img" />
      <h1 className="project-heading">
           <strong className="purple">{project.name} </strong>
        </h1>
      <Card.Body>
        <Card.Text className="card__text" style={{ textAlign: "center" }}>
          {project.description}
        </Card.Text>
        <Button variant="primary" href={project.github} target="_blank">
         Github Link
        </Button>
        <Button variant="primary" href={project.live} target="_blank">
         Live Link
        </Button>
      </Card.Body>
    </Card>   
          </Col>
        </Row>       
      </Container>
    </Container>
        </div>)
      }))}
      </div>
    </Layout>
  )
    }