import { useState } from "react";
import { ListGroupItem, Row, Col } from "react-bootstrap";
// import Dropdown from "react-bootstrap/Dropdown";
// import { BsThreeDots } from "react-icons/bs";
import { LuClipboardEdit } from "react-icons/lu";
import { RiDeleteBin5Line } from "react-icons/ri";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

const ListItem = ({ student, handleEdit, handleRemove }) => {
  const [showDeleteModal, setshowDeleteModal] = useState(false);
  const [showEditModal, setshowEditModal] = useState(false);

  const handleClose = () => setshowDeleteModal(false);

  return (
    <>
      <DeleteModal
        showDeleteModal={showDeleteModal}
        handleClose={handleClose}
        handleDelete={handleRemove}
        deleteId={student.id}
      />
      <EditModal
        showEditModal={showEditModal}
        studentData={student}
        handleEdit={handleEdit}
        handleClose={() => setshowEditModal(false)}
      />
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
            {student.phone}
          </Col>
          <Col xs={6} sm={2}>
            {student.gender}
          </Col>
          <Col xs={6} sm={1}>
            <div className="text-left">
              <LuClipboardEdit
                size={24}
                onClick={() => setshowEditModal(true)}
                style={{ marginRight: "10px", cursor: "pointer" }}
              />
              <RiDeleteBin5Line
                size={24}
                onClick={() => setshowDeleteModal(true)}
                style={{ cursor: "pointer", color: "red" }}
              />
            </div>
          </Col>
        </Row>
      </ListGroupItem>
    </>
  );
};

export default ListItem;
