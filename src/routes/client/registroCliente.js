import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logo from "../../img/logo.jpg";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Axios from "axios";

const RegistroCliente = () => {

    const [name,setName]= useState("");
    const [fhatherLastName,setFatherLastName]= useState("");
    const [motherLastName,setMotherLastName]= useState("");
    const [phoneNumber,setPhoneNumber]= useState("");
    const [mail,setMail]= useState("");
    const [passMail,setPassMail]= useState("");

   const addCliente=()=>{
    Axios.post("http://localhost:3001/Registro",{
        name:name,
        fhatherLastName:fhatherLastName,
        motherLastName:motherLastName,
        phoneNumber:phoneNumber,
        mail:mail,
        passMail:passMail
    }).then(()=>{
        <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    })
   }

  return (
    <div>
      <div>
        <a href="/">
          <img className="redirect-home" src={logo}></img>
        </a>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu nombre"
            onChange={(event)=>{
                setName(event.target.value)
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="appellidoP">
          <Form.Label>Apellido Paterno</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu apellido paterno" onChange={(event)=>{
            setFatherLastName(event.target.value)
          }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="apellidoM">
          <Form.Label>Apellido Materno</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu apellido materno" onChange={(event)=>{
                setMotherLastName(event.target.value)
            }}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="num">
          <Form.Label>Numero de celular</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu numero movil" onChange={(event)=>{
                setPhoneNumber(event.target.value)
            }}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Mail">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="mail" placeholder="Ingresa tu correo" onChange={(event)=>{
                setMail(event.target.value)
            }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingresa tu contraseña" onChange={(event)=>{
                setPassMail(event.target.value)
            }}/>
        </Form.Group>
       
        <Button variant="primary" type="submit" onClick={addCliente}>
          Crear
        </Button>
      </Form>
    </div>
  );
};

export default RegistroCliente;
