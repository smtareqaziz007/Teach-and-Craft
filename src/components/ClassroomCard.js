import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ClassroomCard = ({ title, description, imageUrl }) => {
  return (
    <Card className="classroom-card">
      <Card.Header
        className="classroom-header"
        style={{
          backgroundImage: `url(${imageUrl})`,
          height: "200px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "10px 10px 0 0",
        }}
      ></Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Go to Class</Button>
      </Card.Body>
    </Card>
  );
};

export default ClassroomCard;
