import React from "react"
import Layout from "./Layout"
import { graphql } from 'gatsby'
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function MarkPage({ data }) {
    const post = data.markdownRemark
  
    return (
      <Layout>
        <h1>{post.frontmatter.title}</h1>
        <small>{post.frontmatter.date}</small>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Container fluid className="project-section"> 
      <Container>  
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          <Card className="project-card-view">
      <Card.Img variant="top" src={"https://i.imgur.com/dGFdIg9.png?1"} alt="card-img" />
      <Card.Body>
        <Button variant="primary" href={"https://github.com/youngjerald239/Kitty-Crossing-game"} target="_blank">
         Github Link
        </Button>
        <Button variant="primary" href={"https://kitty-crossing.netlify.app/"} target="_blank">
         Live Link
        </Button>
        KITTY CROSSING
      </Card.Body>
    </Card>   
          </Col>
        </Row>
               
      </Container>
    </Container>
      <Container>  
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          <Card className="project-card-view">
      <Card.Img variant="top" src={"https://res.cloudinary.com/dbgpqig0z/image/upload/v1641835967/sting_vekfjf.png"} alt="card-img" />
      <Card.Body>
        <Button variant="primary" href={"https://github.com/youngjerald239/cardbattle"} target="_blank">
         Github Link
        </Button>
        <Button variant="primary" href={"https://lutukresh.netlify.app/"} target="_blank">
         Live Link
        </Button>
        LUTUKRESH
      </Card.Body>
    </Card>   
          </Col>
        </Row>
               
      </Container>
      <Container>  
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          <Card className="project-card-view">
      <Card.Img variant="top" src={"https://camo.githubusercontent.com/9d199b66d183a00c9534fb6af3dc1461bc7468c08408b30e0dae1b1ac496cc03/68747470733a2f2f692e696d6775722e636f6d2f306d74755437502e706e67"} alt="card-img" />
      <Card.Body>
        <Button variant="primary" href={"https://github.com/youngjerald239/JumpKat"} target="_blank">
         Github Link
        </Button>
        <Button variant="primary" href={""} target="_blank">
         Not yet available
        </Button>
        JumpKat
      </Card.Body>
    </Card>   
          </Col>
        </Row>
               
      </Container>
      </Layout>
    )
  }

export const query = graphql`
  query BlogQuery($slug: String!) { 
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`