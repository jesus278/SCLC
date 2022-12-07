import Axios from "axios";
import { useDebugValue, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Box from "../../../components/box";
import logo from "../../../img/logo.jpg";
import {
  Navigate,
  Route,
  Routes,
  useHref,
  useNavigate,
} from "react-router-dom";
import AddBarber from "../addBarber";

const HomeGerente = () => {
  let navigate = useNavigate();
  const [barberList, setBarberList] = useState([]);

  const getBabers = () => {
    Axios.get("http://localhost:3001/listbarbers").then((response) => {
      setBarberList(response.data);
    });
  };

  const addBarber = () => {
    <Route path="/AddBarber" element={<AddBarber />} />;
    navigate("/AddBarber");
  };

  return (
    <div>
      <div>
        <a href="/">
          <img className="redirect-home" src={logo}></img>
        </a>
      </div>
      {getBabers()}
      <h1>Lista de Barberos</h1>
      {barberList.map((val, key) => {
        return (
          <div>
            <Box
              name={val.name}
              apellidoP={val.fhaterLastName}
              apellidoM={val.motherLastName}
              phone={val.phoneNumber}
              mail={val.mail}
              age={val.age}
              id={val.id}
            />
          </div>
        );
      })}
      <br></br>
      <Button variant="primary" onClick={addBarber}>
        Agregar Nuevo Barbero
      </Button>
      <br></br>
    </div>
  );
};

export default HomeGerente;
