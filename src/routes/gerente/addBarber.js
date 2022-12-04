import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Axios from "axios";

const AddBarber = () => {
  const [name, setName] = useState("");
  const [apellidoP, setApellidoP] = useState("");
  const [apellidoM, setApellidoM] = useState("");
  const [phoneNumbre, setPhoneNumber] = useState("");
  const [mail, setmail] = useState("");
  const [pass, setPass] = useState("");
  const [age, setAge] = useState("");

  const addBarber = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      apellidoP: apellidoP,
      apellidoM: apellidoM,
      phone: phoneNumbre,
      mail: mail,
      pass: pass,
      age: age,
    }).then(() => {
      console.log("Barbero dado de alta");
    });
  };
  const getBabers = () => {
    Axios.get("http://localhost:3001/listbarbers").then((response) => {
      console.log(response);
    });
  };
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="name"
            placeholder="Ingrese Nombre del nuevo barbero"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Apellido P</Form.Label>
          <Form.Control
            type="apellidoP"
            placeholder="Ingrese el apellido P"
            onChange={(e) => {
              setApellidoP(e.target.value);
            }}
          />
          <br></br>
          <Form.Label>Apellido M</Form.Label>
          <Form.Control
            type="apellidoM"
            placeholder="Ingrese el apellido M"
            onChange={(e) => {
              setApellidoM(e.target.value);
            }}
          />
          <br></br>
          <Form.Label>Numero de telefono</Form.Label>
          <Form.Control
            type="phone"
            placeholder="Ingrese el numero de telefono"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
          <br></br>
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="mail"
            placeholder="Ingrese el correo"
            onChange={(e) => {
              setmail(e.target.value);
            }}
          />
          <br></br>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese la contraseña"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <Form.Label>Edad</Form.Label>
          <Form.Control
            type="age"
            placeholder="Ingrese la edad"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={addBarber}>
          Añadir Barbero
        </Button>
        <Button variant="primary" type="submit" onClick={getBabers}>
          Mostrar Barberos
        </Button>
      </Form>
    </div>
  );
};

export default AddBarber;
