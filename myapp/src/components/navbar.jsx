import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; // Use Link from react-router-dom

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-success text-light">
      <Container fluid>
        <Navbar.Brand className="text-warning">
          <Link to="/" className="text-warning" style={{ textDecoration: "none", fontSize: "30px" }}>
            Cricbuzz
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="matches" className="nav-link text-light">
              Matches
            </Link>
            <Link to="schedules" className="nav-link text-light">
              Schedules
            </Link>
            <Link to="series" className="nav-link text-light">
              Series
            </Link>
            <Link to="teams" className="nav-link text-light">
              Teams
            </Link>
            <Link to="venues" className="nav-link text-light">
              Venues
            </Link>
            <Link to="players" className="nav-link text-light">
              Players
            </Link>
            <Link to="iccranking" className="nav-link text-light">
              Icc ranking
            </Link>
            <Link to="news" className="nav-link text-light">
              News
            </Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
