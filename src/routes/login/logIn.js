import Axios from "axios";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import "./form.css"
import { useState } from "react";

function LogIn(props) {

  const [value, setValue] = useState(0);

  const initSesion = () => {
    Axios.get("http://localhost:3001/sesion").then((response) => {
      console.log(response);
    });
  };

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
        />
      </InputGroup>

      <InputGroup className="mb-3login">
        <InputGroup.Text id="basic-addon1">Contraseña</InputGroup.Text>
        <Form.Control
        type='password'
          placeholder="Contraseña"
          aria-label="Password"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <br></br>
      <Button  as="input" type="submit" value="Iniciar" onClick={initSesion(()=>{
        setValue(props.value)
      })}/>

      
    </>
    </div>
  );
}

export default LogIn;