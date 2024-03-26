import React, { useState } from "react";
import { data } from "../data/mockData";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import ListHeader from "../components/ListHeader";
import ListItem from "../components/ListItem";

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
  );
};

export default Students;
