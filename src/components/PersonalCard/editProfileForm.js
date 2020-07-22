import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import MiniProfilePic from "../UserNameCard/miniProfilePic";
import { selectUser } from "../../store/user/selectors";
import { editProfile, updateProfilePic } from "../../store/user/actions";

export default function EditProfileForm() {
  const { name, description, profile_pic } = useSelector(selectUser);

  const [showModal, setShowModal] = useState(false);
  const [profilePicInput, setProfilePicInput] = useState("");
  const [newName, setNewName] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const dispatch = useDispatch();

  function handleFileInput(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    event.preventDefault();
    reader.onloadend = () => {
      dispatch(updateProfilePic(reader.result));
    };
  }

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
      <Button variant="info" onClick={onClickEdit}>
        Edit Profile
      </Button>
      <Modal size="lg" show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <h4>Edit Your Profile</h4>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>
                <strong>Profile Picture</strong>
              </Form.Label>
              <div className="pb-3">
                <MiniProfilePic profile_pic={profile_pic} />
              </div>
              <Form.Control
                value={profilePicInput}
                onChange={handleFileInput}
                type="file"
                name="image"
              />
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label>
                <strong>Name</strong>
              </Form.Label>
              <Form.Control
                value={newName}
                onChange={(event) => setNewName(event.target.value)}
                type="input"
              />
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label>
                <strong>Description</strong>
              </Form.Label>
              <Form.Control
                value={descriptionInput}
                onChange={(event) => setDescriptionInput(event.target.value)}
                type="input"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="info" onClick={updateProfile}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
