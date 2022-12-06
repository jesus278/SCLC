import Axios from "axios";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import "./form.css"
import { useState } from "react";
import {Navigate, Route, Routes, useHref, useNavigate } from 'react-router-dom';
import HomeGerente from "../gerente/home/homeGerente";

function LogIn(props) {
  let navigate =useNavigate();
  const table = props.table;
  const [mail, setMail] = useState("");
  const [passMail, setPassMail] = useState("");

  const initSesion=()=>{
    
    <Route path='/HomeGerente' element={ <HomeGerente/>}/>
    navigate('/HomeGerente');
    Axios.get("http://localhost:3001/sesion",{
        params:{
          mail:mail,
          passMail:passMail,
          table:table
        }
    }).then((response)=>{
      if(response !== null){
      
      }
       
    })
    
   }

  return (
    <div className='logIn'>
    <h1>{props.cabecera}</h1>
    <>
    <img className='imgcontainer-login' src={props.image}></img>
      <InputGroup className="mb-3login">
        <InputGroup.Text className="label" id="basic-addon1">Correo Elextronico</InputGroup.Text>
        <Form.Control
          placeholder="example@gmail.com"
          aria-label="Username"
          aria-describedby="basic-addon1"
          className="input-in"
          onChange={(event)=>{
            setMail(event.target.value)
          }}
        />
      </InputGroup>

      <InputGroup className="mb-3login">
        <InputGroup.Text id="basic-addon1">Contraseña</InputGroup.Text>
        <Form.Control
        type='password'
          placeholder="Contraseña"
          aria-label="Password"
          aria-describedby="basic-addon1"
          onChange={(event)=>{
            setPassMail(event.target.value)
          }}
        />
      </InputGroup>
      <br></br>
      <Button  as="input" type="submit" value="Iniciar" onClick={initSesion}/>

      
    </>
    </div>
  );
}

export default LogIn;