import React, { useState } from "react";
import { Button, Modal, Row } from "react-bootstrap";
import imagenes from "../assets/imagenes";

export default function Editar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        size="sm"
        style={{ fontSize: 16, width: "20%", backgroundColor: "green" }}
        onClick={handleShow}
      >
        Editar
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Row>
            <img
              style={{ marginLeft: 50,marginRight: 50,  width: 250, height:350 }}
              src={imagenes[0].img}
            />
            <div>
            <form  >
              <label style={{display:"flex", flexDirection:"column"}}>
                Producto:
                <textarea style={{height:35, width:250}} />
                Descripción:
                <textarea style={{height:300, width:300}} />
              </label>
            </form>
            </div>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" value="Submit" variant="primary" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
