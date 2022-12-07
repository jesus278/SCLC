import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Success() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Realizado Correctamente</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Accion realizada exitosamente</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Cerrar</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default Success;