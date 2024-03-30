import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ClassroomCard = ({ title, description, color }) => {
  return (
    <Card className="classroom-card">
      <Card.Header
        className="classroom-header"
        style={{
          backgroundColor: color,
          height: "100px",
          borderRadius: "10px 10px 0 0",
        }}
      ></Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="dark">Go to Class</Button>
      </Card.Body>
    </Card>
  );
};

export default ClassroomCard;
