import  Navbar  from '../principal/navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import barberoIMG from "../../img/barbero.jpg"
import LogIn from '../login/logIn';
import gerenteIMG from "../../img/gerente.png"
import "./styles/form.css"
function LogInGerente() {
  return (
    <div>
      <LogIn
      cabecera="Inicio de sesion Gerente"
      image={gerenteIMG}
      />
    </div>
  );
}

export default LogInGerente;