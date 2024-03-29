import React, { useState } from "react";
import ClassroomCard from "../components/ClassroomCard";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Classrooms = () => {
  const [classrooms, setClassrooms] = useState([
    {
      id: 1,
      title: "Mathematics",
      description: "Learn math in a fun way",
      imageUrl: "https://via.placeholder.com/400x200",
    },
    {
      id: 2,
      title: "Science",
      description: "Discover the wonders of science",
      imageUrl: "https://via.placeholder.com/400x200",
    },
    {
      id: 3,
      title: "History",
      description: "Explore the past and learn from it",
      imageUrl: "https://via.placeholder.com/400x200",
    },
  ]);

  const [newClassroom, setNewClassroom] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });

  const handleAddClassroom = () => {
    const id = classrooms.length + 1;
    setClassrooms([...classrooms, { ...newClassroom, id }]);
    setNewClassroom({ title: "", description: "", imageUrl: "" });
  };

  const handleCancelAddClassroom = () => {
    setNewClassroom({ title: "", description: "", imageUrl: "" });
  };

  const handleNewClassroomChange = (e) => {
    const { name, value } = e.target;
    setNewClassroom({ ...newClassroom, [name]: value });
  };

  return (
    <div className="container">
      <div className="row">
        {classrooms.map((classroom) => (
          <div key={classroom.id} className="col-md-4 mb-3">
            <ClassroomCard
              title={classroom.title}
              description={classroom.description}
              imageUrl={classroom.imageUrl}
            />
          </div>
        ))}
        <div className="col-md-4 mb-3">
          <div className="card text-center" style={{ cursor: "pointer" }}>
            <div className="card-body">
              <AiOutlinePlusCircle size={50} style={{ color: "#007bff" }} />
              <p>Add New Classroom</p>
            </div>
            <div className="card-footer">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Title"
                name="title"
                value={newClassroom.title}
                onChange={handleNewClassroomChange}
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Description"
                name="description"
                value={newClassroom.description}
                onChange={handleNewClassroomChange}
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Image URL"
                name="imageUrl"
                value={newClassroom.imageUrl}
                onChange={handleNewClassroomChange}
              />
              <button
                className="btn btn-primary mr-2"
                onClick={handleAddClassroom}
              >
                Save
              </button>
              <button
                className="btn btn-secondary"
                onClick={handleCancelAddClassroom}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classrooms;
