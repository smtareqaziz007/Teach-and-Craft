// ListItem.js

import React, { useState } from "react";
import { ListGroupItem, Row, Col } from "react-bootstrap";
import { LuClipboardEdit } from "react-icons/lu";
import { RiDeleteBin5Line } from "react-icons/ri";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

const ListItem = ({
  student,
  handleEdit,
  handleRemove,
  handleSelect,
  isChecked,
}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <>
      <DeleteModal
        showDeleteModal={showDeleteModal}
        handleClose={() => setShowDeleteModal(false)}
        handleDelete={handleRemove}
        deleteId={student.id}
      />
      <EditModal
        showEditModal={showEditModal}
        studentData={student}
        handleEdit={handleEdit}
        handleClose={() => setShowEditModal(false)}
      />
      <ListGroupItem key={student.id}>
        <Row>
          <Col xs={6} sm={1}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => handleSelect(student.id)}
            />
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
                onClick={() => setShowEditModal(true)}
                style={{ marginRight: "10px", cursor: "pointer" }}
              />
              <RiDeleteBin5Line
                size={24}
                onClick={() => setShowDeleteModal(true)}
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
