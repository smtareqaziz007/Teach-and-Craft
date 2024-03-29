import React, { useState } from "react";
import { data } from "../data/mockData";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import ListHeader from "../components/ListHeader";
import ListItem from "../components/ListItem";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { IoPersonAddOutline } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import AddModal from "../components/AddModal";

const Students = () => {
  const [studentData, setStudentData] = useState(data);
  const [showModal, setshowModal] = useState(false);

  const handleEdit = (id) => {
    // Logic to edit student
    console.log("Edit student with ID:", id);
  };

  const handleRemove = (id) => {
    console.log("Remove student with ID:", id);
    setStudentData(studentData.filter((student) => student.id !== id));
  };

  const handleClose = () => setshowModal(false);
  const handleShow = () => setshowModal(true);

  const onSubmit = (newStudentData) => {
    console.log("New student");
    console.log(newStudentData);
    setStudentData([...studentData, newStudentData]);
  };

  return (
    <>
      <AddModal
        showModal={showModal}
        handleClose={handleClose}
        onSubmit={onSubmit}
      />
      <Container
        style={{ maxWidth: "1000px", marginBottom: "20px", marginTop: "20px" }}
      >
        <InputGroup>
          <Button
            variant="dark"
            style={{ borderRadius: 20, marginRight: "10px" }}
            onClick={handleShow}
          >
            <IoPersonAddOutline size={20} />
          </Button>
          <Button variant="dark" style={{ borderRadius: 20 }}>
            <SiGoogleclassroom size={20} />
          </Button>
          <FormControl
            placeholder="Search..."
            style={{
              marginLeft: "10px",
              borderWidth: "2px",
              borderColor: "black",
              borderRadius: 20,
            }}
          />
        </InputGroup>
      </Container>
      <Container style={{ maxWidth: "1000px" }}>
        <ListGroup>
          <ListHeader />
          {studentData.map((student) => (
            <ListItem
              key={student.id}
              student={student}
              handleEdit={handleEdit}
              handleRemove={handleRemove}
            />
          ))}
        </ListGroup>
      </Container>
    </>
  );
};

export default Students;
