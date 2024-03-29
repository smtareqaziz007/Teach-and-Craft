import React from "react";
import ClassroomCard from "../components/ClassroomCard";

const Classrooms = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <ClassroomCard
              title="Mathematics"
              description="Learn math in a fun way"
              imageUrl="https://via.placeholder.com/400x200"
            />
          </div>
          <div className="col-md-4">
            <ClassroomCard
              title="Science"
              description="Discover the wonders of science"
              imageUrl="https://via.placeholder.com/400x200"
            />
          </div>
          <div className="col-md-4">
            <ClassroomCard
              title="History"
              description="Explore the past and learn from it"
              imageUrl="https://via.placeholder.com/400x200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classrooms;
