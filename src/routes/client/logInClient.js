import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import clienteIMG from "../../img/user.png" 
import LogIn from '../login/logIn';

function LogInClient() {
  return (
    <div>
      <LogIn
      cabecera="Inicio de sesion Cliente"
      image={clienteIMG}
      />
    </div>
  );
}

export default LogInClient;