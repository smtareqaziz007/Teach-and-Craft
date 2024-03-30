import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { RiDeleteBin6Line } from "react-icons/ri";
import Modal from "react-bootstrap/Modal";

const ClassroomCard = ({ id, title, description, color, onDelete }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleDelete = () => {
    onDelete(id);
    setShowModal(false);
  };

  return (
    <>
      <Card className="classroom-card">
        <Card.Header
          className="classroom-header"
          style={{
            backgroundColor: color,
            height: "100px",
            borderRadius: "10px 10px 0 0",
            position: "relative",
          }}
        ></Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="dark">Go to Class</Button>
          <Button
            variant="light"
            style={{
              position: "absolute",
              bottom: "15px",
              right: "15px",
              zIndex: 1,
            }}
            onClick={() => setShowModal(true)}
          >
            <RiDeleteBin6Line size={25} />
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this classroom?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ClassroomCard;
