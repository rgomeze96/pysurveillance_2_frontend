import React, { useState, useEffect, Fragment } from "react";

import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Navibar.css";

export const Navibar = () => {
  return (
    <div>
      <Navbar
        static="top"
        className="left"
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand style={{ fontSize: "35px" }} href="/">
          <img
            src="/images/pysurveillance_logo.jpg"
            width="150px"
            height="70px"
            className="rounded bg-dark"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-5">
            <NavDropdown title="Navigate" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
