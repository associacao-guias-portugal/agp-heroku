import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./PopUpdeleteNoticias.css";
import PropTypes from "prop-types";

function ModalPopup(props) {
  const { handleClose, handleDelete, show } = props;
  return (
    <div style={{ width: "100px" }}>
      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Tem a certeza que deseja apagar este item?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button className="modal-button-no" onClick={handleClose}>
            Não
          </Button>
          <Button className="modal-button-yes" onClick={handleDelete}>
            Sim
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

ModalPopup.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default ModalPopup;
