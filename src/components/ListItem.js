import React from "react";
import { ListGroupItem, Row, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
// import { BsThreeDots } from "react-icons/bs";

const ListItem = ({ student, handleEdit, handleRemove }) => {
  return (
    <ListGroupItem key={student.id}>
      <Row>
        <Col xs={6} sm={1}>
          <input type="checkbox" />
        </Col>
        <Col xs={6} sm={3}>
          {student.name}
        </Col>
        <Col xs={6} sm={1}>
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
  );
};

export default ListItem;
