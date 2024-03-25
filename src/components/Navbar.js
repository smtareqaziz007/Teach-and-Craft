import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/image.png";

const Navigationbar = () => {
  return (
    <Navbar bg="black" variant="dark" expand="lg" style={{ height: "45px" }}>
      <Container>
        <Navbar.Brand as={NavLink} to="/home" style={{ fontSize: "0.8rem" }}>
          <img
            src={logo}
            alt="Teach & Craft Logo"
            height="30"
            className="d-inline-block align-top"
            style={{ marginRight: "10px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/home" style={{ fontSize: "0.8rem" }}>
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/students"
              style={{ fontSize: "0.8rem" }}
            >
              Students
            </Nav.Link>
            <Nav.Link as={NavLink} to="/classes" style={{ fontSize: "0.8rem" }}>
              Classrooms
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
