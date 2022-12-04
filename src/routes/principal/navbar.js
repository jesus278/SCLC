import {Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../img/logo.jpg";
import {React,useState } from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function Navegation() {

    return (
    <Navbar
      collapseOnSelect
      expand="lg"
      //className={color ? "bg" : "light"}
      className="light"
    >
      <Container className="mobilenav">
        <Navbar.Brand href="#Inicio">
          <img className="img-nav" src={logo} alt=""></img>
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
          <Link
              //className={color ? "text-visible" : "LinkStyle"}
              className="LinkStyle"
              to="Cliente"
            >
              Cliente
            </Link>
          <Link
              //className={color ? "text-visible" : "LinkStyle"}
              className="LinkStyle"
              to="Barbero"
            >
              Barbero
            </Link>

            <Link
              //className={color ? "text-visible" : "LinkStyle"}
              className="LinkStyle"
              to="Gerente"
            >
              Gerente
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navegation;

