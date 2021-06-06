import React from "react"
import { RedH1 } from "../styles/mainstyles"
import { Link } from "gatsby"
import "../style.css"
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from "react-bootstrap"

const Layout = props => {
  return (
    <>
      
      <header className="header">
      <Navbar bg="dark" variant="dark" fixed="top">
      <Nav className="nav">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="/blog">Games</Nav.Link>
    </Nav>
  </Navbar>
  </header>

  <main className="main">{props.children}</main>   
      <footer className="footer">   
      <Navbar bg="dark" variant="dark" sticky="bottom">
      <Nav className="nav">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="https://github.com/youngjerald239">Copyright © 2021 JY</Nav.Link>
    </Nav>
  </Navbar>
      </footer>
    </>
  )
}

export default Layout
