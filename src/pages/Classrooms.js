import React, { useState } from "react";
import ClassroomCard from "../components/ClassroomCard";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { mockClassroom } from "../data/mockClassroom";
import { uid } from "uid";

const Classrooms = () => {
  const [classrooms, setClassrooms] = useState(mockClassroom);

  const [newClassroom, setNewClassroom] = useState({
    id: uid(),
    title: "",
    description: "",
    color: "#000000",
  });

  const handleAddClassroom = () => {
    setClassrooms([...classrooms, newClassroom]);
    setNewClassroom({
      id: uid(),
      title: "",
      description: "",
      color: "#000000",
    });
  };

  const handleNewClassroomChange = (e) => {
    const { name, value } = e.target;
    setNewClassroom({ ...newClassroom, [name]: value });
  };

  const handleDeleteClassroom = (id) => {
    setClassrooms(classrooms.filter((classroom) => classroom.id !== id));
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {classrooms.map((classroom) => (
          <div key={classroom.id} className="col-md-4 mb-4">
            <ClassroomCard
              id={classroom.id} // Pass the id of the classroom
              title={classroom.title}
              description={classroom.description}
              color={classroom.color}
              onDelete={handleDeleteClassroom} // Pass the delete function
            />
          </div>
        ))}
        <div className="col-md-4 mb-4">
          <div className="card text-center" style={{ cursor: "pointer" }}>
            <div
              className="card-body"
              style={{ height: "100px", backgroundColor: "black" }}
            >
              <AiOutlinePlusCircle size={50} style={{ color: "#FFFFFF" }} />
              <p className="text-light">Add New Classroom</p>
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
                type="color"
                className="form-control mb-2"
                name="color"
                value={newClassroom.color}
                onChange={handleNewClassroomChange}
              />
              <button
                className="btn btn-dark mr-2"
                onClick={handleAddClassroom}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classrooms;
