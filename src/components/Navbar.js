import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigationbar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="students">Students</Nav.Link>
          <Nav.Link href="classes">Classrooms</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
