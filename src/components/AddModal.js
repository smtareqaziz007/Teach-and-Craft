import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { uid } from "uid";

const AddModal = ({ showModal, handleClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: uid(),
    name: "",
    roll: "",
    class: "",
    phone: "",
    gender: "Male",
  });

  const handleReset = () => {
    setFormData({
      id: uid(),
      name: "",
      roll: "",
      class: "",
      phone: "",
      gender: "Male",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // console.log("Form Data:", formData);
    onSubmit(formData);
    handleReset();
    handleClose();
  };

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
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formRoll">
            <Form.Label>Roll</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter roll number"
              min="1"
              name="roll"
              value={formData.roll}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formClass">
            <Form.Label>Class</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter class"
              min="1"
              name="class"
              value={formData.class}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option>Male</option>
              <option>Female</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Save
        </Button>
        <Button variant="secondary" onClick={handleReset}>
          Clear
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddModal;
