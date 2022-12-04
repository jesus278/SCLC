import { Link } from "react-router-dom";
import clienteIMG from "../../img/user.png";
import LogIn from "../login/logIn";
import "./logInClient.css"
import logo from "../../img/logo.jpg"

function LogInClient() {
  return (
    <div>
      <div>
        <a href="/">
          <img className="redirect-home" src={logo}></img>
        </a>
      </div>
      <LogIn cabecera="Inicio de sesion Cliente" image={clienteIMG} />
      <div className="link-box">
      <Link
        //className={color ? "text-visible" : "LinkStyle"}
        className="LinkStyle"
        to="Gerente"
      >
        Soy Gerente
      </Link>
      <Link
        //className={color ? "text-visible" : "LinkStyle"}
        className="LinkStyle"
        to="Barbero"
      >
        Soy Barbero
      </Link>
      </div>
    </div>
  );
}

export default LogInClient;
