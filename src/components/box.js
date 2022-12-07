import Modal from "../components/modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./styles/box.css";

function Box(props) {
  return (
    <Card>
      <Card.Header as="h5">Barbero</Card.Header>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text className="text">
          Nombre: {props.name} {props.apellidoP} {props.apellidoM}
          <br></br> Celular: {props.phone}
          <br></br>Correo: {props.mail}
        </Card.Text>
        <Modal
          name={props.name}
          apellidoP={props.apellidoP}
          apellidoM={props.apellidoM}
          phone={props.phone}
          mail={props.mail}
          age={props.age}
          id={props.id}
        />
      </Card.Body>
    </Card>
  );
}

export default Box;
