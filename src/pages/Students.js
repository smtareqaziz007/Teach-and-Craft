import { useState } from "react";
import { data } from "../data/mockData";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import { BsThreeDots } from "react-icons/bs";

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
        <ListGroupItem variant="primary">
          <Row>
            <Col xs={6} sm={3}>
              <strong>Name</strong>
            </Col>
            <Col xs={6} sm={2}>
              <strong>Roll</strong>
            </Col>
            <Col xs={6} sm={1}>
              <strong>Class</strong>
            </Col>
            <Col xs={6} sm={3}>
              <strong>Phone</strong>
            </Col>
            <Col xs={6} sm={2}>
              <strong>Gender</strong>
            </Col>
            <Col xs={6} sm={1}>
              <strong>Action</strong>
            </Col>
          </Row>
        </ListGroupItem>
        {studentData.map((student) => (
          <ListGroupItem key={student.id}>
            <Row>
              <Col xs={6} sm={3}>
                {student.name}
              </Col>
              <Col xs={6} sm={2}>
                {student.roll}
              </Col>
              <Col xs={6} sm={1}>
                {student.class}
              </Col>
              <Col xs={6} sm={3}>
                {student.mobile_number}
              </Col>
              <Col xs={6} sm={2}>
                {student.gender}
              </Col>
              <Col xs={6} sm={1}>
                <div className="text-center">
                  <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                      <i className="fa fa-ellipsis-h"></i>
                      {/* <BsThreeDots /> */}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => handleEdit(student.id)}>
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleRemove(student.id)}>
                        Remove
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Students;
