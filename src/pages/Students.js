import React, { useState } from "react";
import { data } from "../data/mockData";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import ListHeader from "../components/ListHeader";
import ListItem from "../components/ListItem";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { BsPlus } from "react-icons/bs";

const Students = () => {
  const [studentData, setStudentData] = useState(data);

  const handleEdit = (id) => {
    // Logic to edit student
    console.log("Edit student with ID:", id);
  };

  const handleRemove = (id) => {
    console.log("Remove student with ID:", id);
    setStudentData(studentData.filter((student) => student.id !== id));
  };

  return (
    <>
      <Container
        style={{ maxWidth: "900px", marginBottom: "20px", marginTop: "20px" }}
      >
        <InputGroup>
          <Button variant="dark" style={{ borderRadius: 20 }}>
            <BsPlus size={30} />
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
      <Container style={{ maxWidth: "900px" }}>
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
