import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Axios from "axios";
import "./styles/modal.css"

function Modal2(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [name, setName] = useState(props.name);
  const [apellidoP, setApellidoP] = useState(props.apellidoP);
  const [apellidoM, setApellidoM] = useState(props.apellidoM);
  const [phoneNumbre, setPhoneNumber] = useState(props.phone);
  const [mail, setmail] = useState(props.mail);
  const [id, setID] = useState(props.id);
  const [age, setAge] = useState(props.age);

  const editBarber = () => {

  
    Axios.put("http://localhost:3001/edit", {
      name: name,
      apellidoP: apellidoP,
      apellidoM: apellidoM,
      phone: phoneNumbre,
      mail: mail,
      age: age,
      id: id,
    }).then(() => {});
    
  };

  const delitBarber = () => {

  
    Axios.put("http://localhost:3001/delitB", {
      id: id,
    }).then(() => {});
    
  };

  return (
    <>
      <Button className="button-gerente" variant="primary" onClick={handleShow}>
        Editar
      </Button>
      <Button className="button-gerente" variant="outline-danger" onClick={handleShow2}>
        Eliminar
      </Button>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Borrar a {props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Estas seguro de borrar al barbero {props.name}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={delitBarber}>
            Borrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editando {props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="name"
                defaultValue={props.name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Apellido P</Form.Label>
              <Form.Control
                type="apellidoP"
                defaultValue={props.apellidoP}
                onChange={(e) => {
                  setApellidoP(e.target.value);
                }}
              />
              <br></br>
              <Form.Label>Apellido M</Form.Label>
              <Form.Control
                type="apellidoM"
                defaultValue={props.apellidoM}
                onChange={(e) => {
                  setApellidoM(e.target.value);
                }}
              />
              <br></br>
              <Form.Label>Numero de telefono</Form.Label>
              <Form.Control
                type="phone"
                defaultValue={props.phone}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
              <br></br>
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="mail"
                defaultValue={props.mail}
                onChange={(e) => {
                  setmail(e.target.value);
                }}
              />
              <br></br>
              <Form.Label>Edad</Form.Label>
              <Form.Control
                type="age"
                defaultValue={props.age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={editBarber}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modal2;
