import Axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "./form.css";
import { useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useHref,
  useNavigate,
} from "react-router-dom";
import HomeGerente from "../gerente/home/homeGerente";
import HomeCliente from "../client/home/homeClient";

function LogIn(props) {

  const [cliente, setCliente] = useState([]);
  let navigate = useNavigate();
  const table = props.table;
  const [mail, setMail] = useState("");
  const [passMail, setPassMail] = useState("");

  const initSesion = () => {
    if (table == "gerente") {
      <Route path="/HomeGerente" element={<HomeGerente />} />;
      navigate("/HomeGerente");
    }
    if (table == "cliente") {
      <Route path="/HomeCliente" element={<HomeCliente />} />;
      navigate("/HomeCliente");
    }
    if (table == "barbero") {
      <Route path="/HomeBarbero" element={<HomeGerente />} />;
      navigate("/Barbero");
    }
    Axios.get("http://localhost:3001/sesion", {
      params: {
        mail: mail,
        passMail: passMail,
        table: table,
      },
    }).then((response) => {
      setCliente(response.data)
      console.log(response.data)
    });
  };

  return (
    <div className="logIn">
      <h1>{props.cabecera}</h1>
      <>
        <img className="imgcontainer-login" src={props.image}></img>
        <InputGroup className="mb-3login">
          <InputGroup.Text className="label" id="basic-addon1">
            Correo Elextronico
          </InputGroup.Text>
          <Form.Control
            placeholder="example@gmail.com"
            aria-label="Username"
            aria-describedby="basic-addon1"
            className="input-in"
            onChange={(event) => {
              setMail(event.target.value);
            }}
          />
        </InputGroup>

        <InputGroup className="mb-3login">
          <InputGroup.Text id="basic-addon1">Contraseña</InputGroup.Text>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            aria-label="Password"
            aria-describedby="basic-addon1"
            onChange={(event) => {
              setPassMail(event.target.value);
            }}
          />
        </InputGroup>
        <br></br>
        <Button as="input" type="submit" value="Iniciar" onClick={initSesion} />
      </>
    </div>
  );
}

export default LogIn;
