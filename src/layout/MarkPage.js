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
      </Card.Body>
    </Card>   
          </Col>
        </Row>       
      </Container>
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