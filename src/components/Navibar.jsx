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
            src="/images/py_surv_just_snake_100x100.png"
            width="75px"
            height="75px"
            className="rounded bg-dark"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};
