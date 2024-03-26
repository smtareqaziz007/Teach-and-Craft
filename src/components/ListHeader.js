import React from "react";
import { ListGroupItem, Row, Col } from "react-bootstrap";

const ListHeader = () => {
  return (
    <ListGroupItem variant="primary">
      <Row>
        <Col xs={6} sm={1}></Col>
        <Col xs={6} sm={3}>
          <strong>Name</strong>
        </Col>
        <Col xs={6} sm={1}>
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
  );
};

export default ListHeader;
