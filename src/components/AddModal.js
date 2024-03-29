import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const AddModal = ({ showModal, handleClose }) => {
  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add Student</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
          <Form.Group controlId="formRoll">
            <Form.Label>Roll</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter roll number"
              min="1"
            />
          </Form.Group>
          <Form.Group controlId="formClass">
            <Form.Label>Class</Form.Label>
            <Form.Control type="number" placeholder="Enter class" min="1" />
          </Form.Group>
          <Form.Group controlId="formPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="Enter phone number" />
          </Form.Group>
          <Form.Group controlId="formGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select">
              <option>Male</option>
              <option>Female</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Save</Button>
        <Button variant="secondary">Clear</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddModal;
