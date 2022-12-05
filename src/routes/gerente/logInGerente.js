import LogIn from '../login/logIn';
import gerenteIMG from "../../img/gerente.png"
import "./styles/form.css"
import logo from "../../img/logo.jpg"

function LogInGerente() {
  return (
    <div>
      <div>
        <a href="/">
          <img className="redirect-home" src={logo}></img>
        </a>
      </div>
      <LogIn
      cabecera="Inicio de sesion Gerente"
      image={gerenteIMG}
      table="gerente"
      />
    </div>
  );
}

export default LogInGerente;