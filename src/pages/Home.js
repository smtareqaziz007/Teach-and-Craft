import React from "react";
import { Carousel, Card } from "react-bootstrap";

const Homepage = () => {
  return (
    <div className="container text-center">
      <h1 className="display-4 mb-5">Welcome to Our Platform</h1>
      <div className="container-fluid d-flex justify-content-center">
        <Carousel
          indicators={false}
          nextIcon={<span className="carousel-control-next-icon text-dark" />}
          prevIcon={<span className="carousel-control-prev-icon text-dark" />}
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center h-100">
              <Card
                className="bg-dark text-white rounded-lg"
                style={{
                  width: "600px",
                  height: "300px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                <Card.Body>
                  <Card.Title className="display-5 mb-4">
                    100+ Students
                  </Card.Title>
                  <Card.Text className="lead">
                    Explore our diverse student community.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center h-100">
              <Card
                className="bg-dark text-white rounded-lg"
                style={{
                  width: "600px",
                  height: "300px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                <Card.Body>
                  <Card.Title className="display-5 mb-4">
                    10+ Classrooms
                  </Card.Title>
                  <Card.Text className="lead">
                    Discover our interactive classrooms.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="mt-5">
        <h2 className="mb-4">Why Choose Us?</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Expert Teachers</h5>
                <p className="card-text">
                  Our experienced teachers provide high-quality education.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Modern Facilities</h5>
                <p className="card-text">
                  We offer state-of-the-art facilities for learning and growth.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Flexible Learning</h5>
                <p className="card-text">
                  Our flexible learning options cater to diverse needs and
                  schedules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
