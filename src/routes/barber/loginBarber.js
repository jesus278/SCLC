import logo from "../../img/logo.jpg"
import barberoIMG from "../../img/barbero.jpg"
import LogIn from '../login/logIn';
import "./loginBarber.css"
function LogInBarber() {
  return (
    <div>
      <div>
        <a href="/">
          <img className="redirect-home" src={logo}></img>
        </a>
      </div>
      <LogIn
      cabecera="Inicio de sesion Barbero"
      image={barberoIMG}
      value={1}
      />
    </div>
  );
}

export default LogInBarber;