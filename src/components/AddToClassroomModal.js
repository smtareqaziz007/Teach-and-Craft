import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

const AddToClassroomModal = ({ show, handleClose, selectedStudents }) => {
  const [selectedClassroom, setSelectedClassroom] = useState("");
  const [availableClassrooms, setAvailableClassrooms] = useState(() => {
    const storedClassrooms = localStorage.getItem("classrooms");
    if (storedClassrooms) {
      return JSON.parse(storedClassrooms);
    } else return [];
  });

  const handleAddToClassroom = () => {
    const updatedClassroom = {
      ...selectedClassroom,
      students: [...selectedStudents],
    };

    localStorage.setItem(
      `classroom-${selectedClassroom.id}`,
      JSON.stringify(updatedClassroom)
    );

    // // Update the state of availableClassrooms with the updated classroom
    // const updatedAvailableClassrooms = availableClassrooms.map((classroom) =>
    //   classroom.id === selectedClassroom.id ? updatedClassroom : classroom
    // );
    // setAvailableClassrooms(updatedAvailableClassrooms);

    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Selected Students to Classroom</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Select a classroom to add the selected students:</p>
        <Dropdown>
          <Dropdown.Toggle
            variant="dark"
            id="dropdown-basic"
            style={{
              backgroundColor: selectedClassroom.color || "#343a40",
              color: "white",
            }}
          >
            {selectedClassroom ? selectedClassroom.title : "Select Classroom"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {availableClassrooms.map((classroom) => (
              <Dropdown.Item
                key={classroom.id}
                onClick={() => setSelectedClassroom(classroom)}
                style={{ backgroundColor: classroom.color, color: "white" }}
              >
                {classroom.title}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="dark" onClick={handleAddToClassroom}>
          Add to Classroom
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddToClassroomModal;
