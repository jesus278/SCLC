import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logo from "../../img/logo.jpg";
import React, { useState } from 'react';
import Axios from "axios";
import "./registroCliente.css"

const RegistroCliente = () => {

    const [name,setName]= useState("");
    const [fhatherLastName,setFatherLastName]= useState("");
    const [motherLastName,setMotherLastName]= useState("");
    const [phoneNumber,setPhoneNumber]= useState("");
    const [mail,setMail]= useState("");
    const [passMail,setPassMail]= useState("");
    const [altura, setAltura]=useState("");

   const addCliente=()=>{
    Axios.post("http://localhost:3001/Registro",{
        name:name,
        fhatherLastName:fhatherLastName,
        motherLastName:motherLastName,
        phoneNumber:phoneNumber,
        mail:mail,
        passMail:passMail
    }).then(()=>{
       
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
          <Form.Label className="label">Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu nombre"
            onChange={(event)=>{
                setName(event.target.value)
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="appellidoP">
          <Form.Label className="label">Apellido Paterno</Form.Label>
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
       
        <Button className="buttons" variant="primary" type="submit" onClick={addCliente}>
          Crear
        </Button>
      </Form>
    </div>
  );
};

export default RegistroCliente;
