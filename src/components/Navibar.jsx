import React, { useState, useEffect, Fragment } from "react";

import {
  Button,
  Alert,
  Container,
  Row,
  Col,
  Navbar,
  NavDropdown,
  Nav,
  NavItem,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Navibar.css";
import { useSelector, useDispatch } from "react-redux";

export const Navibar = () => {
  const [ready, setReady] = useState(false);
  const [userLoaded, setUserLoaded] = useState(false);

  const getAuth = useSelector((state) => state.auth);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUserLoaded(true);
    }
  }, []);

  return (
    <div>
      <Navbar
        fixed="top"
        className="center"
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand style={{ fontSize: "35px" }} href="/">
          <span className="text-warning">Py</span>
          <span className="text-primary">Surveillance</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-auto">
            {userLoaded === true && (
              <Fragment>
                <Nav.Link href="/customeraccount">Mi Cuenta</Nav.Link>
                <Nav.Link href="/logoutcustomer">Cerrar Sesión</Nav.Link>
              </Fragment>
            )}
            {userLoaded === false && (
              <Fragment>
                <Nav.Link href="/registercustomer">Registrar</Nav.Link>
                <Nav.Link href="/logincustomer">Iniciar Sesión</Nav.Link>
              </Fragment>
            )}

            <NavDropdown title="Navegar" id="basic-nav-dropdown">
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
