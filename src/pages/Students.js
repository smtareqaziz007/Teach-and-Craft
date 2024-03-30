import { useState, useEffect } from "react";
import { data } from "../data/mockData";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import ListHeader from "../components/ListHeader";
import ListItem from "../components/ListItem";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { IoPersonAddOutline } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import AddModal from "../components/AddModal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Students = () => {
  const [studentData, setStudentData] = useState(() => {
    const storedStudents = localStorage.getItem("students");
    if (storedStudents && JSON.parse(storedStudents).length > 0)
      return JSON.parse(storedStudents);
    else return data;
  });

  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudents, setSelectedStudents] = useState([]);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(studentData));
  }, [studentData]);

  const handleEdit = (editedStudentData) => {
    const updatedStudentData = studentData.map((student) => {
      if (student.id === editedStudentData.id) {
        return editedStudentData;
      }
      return student;
    });

    setStudentData(updatedStudentData);
  };

  const onSubmit = (newStudentData) => {
    const updatedStudentData = [...studentData, newStudentData];
    setStudentData(updatedStudentData);
    localStorage.setItem("students", JSON.stringify(updatedStudentData));
  };

  const handleRemove = (id) => {
    setStudentData(studentData.filter((student) => student.id !== id));
    setSelectedStudents(
      selectedStudents.filter((studentId) => studentId !== id)
    );
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSelect = (student) => {
    if (selectedStudents.includes(student)) {
      setSelectedStudents(selectedStudents.filter((std) => std !== student));
    } else {
      setSelectedStudents([...selectedStudents, student]);
    }
    console.log(selectedStudents);
  };

  const filteredStudents = studentData.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <AddModal
        showModal={showModal}
        handleClose={handleClose}
        onSubmit={onSubmit}
      />
      <Container
        style={{ maxWidth: "1100px", marginBottom: "20px", marginTop: "20px" }}
      >
        <InputGroup>
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="addStudentTooltip">Add Student</Tooltip>}
          >
            <Button
              variant="dark"
              style={{ borderRadius: 20, marginRight: "10px" }}
              onClick={handleShow}
            >
              <IoPersonAddOutline size={20} />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            overlay={
              <Tooltip id="addToClassroomTooltip">Add to Classroom</Tooltip>
            }
          >
            <Button variant="dark" style={{ borderRadius: 20 }}>
              <SiGoogleclassroom size={20} />
            </Button>
          </OverlayTrigger>
          <FormControl
            placeholder="Search..."
            onChange={handleSearch}
            style={{
              marginLeft: "10px",
              borderWidth: "2px",
              borderColor: "black",
              borderRadius: 20,
            }}
          />
        </InputGroup>
      </Container>
      <Container style={{ maxWidth: "1100px" }}>
        <ListGroup>
          <ListHeader />
          {filteredStudents.map((student) => (
            <ListItem
              key={student.id}
              student={student}
              handleEdit={handleEdit}
              handleRemove={handleRemove}
              handleSelect={handleSelect}
              isChecked={selectedStudents.includes(student)}
            />
          ))}
        </ListGroup>
      </Container>
      {/* <Container style={{ marginTop: "20px", maxWidth: "1100px" }}>
        <h3>Selected Students:</h3>
        <ul>
          {selectedStudents.map((student) => {
            return <li key={student.id}>{student.name}</li>;
          })}
        </ul>
      </Container> */}
    </>
  );
};

export default Students;
