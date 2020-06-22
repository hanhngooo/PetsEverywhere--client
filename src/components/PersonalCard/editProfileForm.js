import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { editProfile } from "../../store/user/actions";

export default function EditProfileForm() {
  const { name, description } = useSelector(selectUser);

  const [showModal, setShowModal] = useState(false);
  const [profilePicInput, setProfilePicInput] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [newName, setNewName] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const dispatch = useDispatch();

  function onClickEdit() {
    setShowModal(true);
    setNewName(name);
    setDescriptionInput(description);
  }
  function updateProfile(event) {
    event.preventDefault();
    dispatch(editProfile(newName, descriptionInput));
    setDescriptionInput("");

    setShowModal(false);
  }
  return (
    <div>
      <Button onClick={onClickEdit}>Edit Profile</Button>
      <Modal size="lg" show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>Edit Your Profile</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Profile Picture</Form.Label>
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={newName}
                onChange={(event) => setNewName(event.target.value)}
                type="input"
              />
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label>Description</Form.Label>
              <Form.Control
                value={descriptionInput}
                onChange={(event) => setDescriptionInput(event.target.value)}
                type="input"
                // placeholder={description}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={updateProfile}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
