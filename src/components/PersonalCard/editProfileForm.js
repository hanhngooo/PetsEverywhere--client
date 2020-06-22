import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { editProfile } from "../../store/user/actions";

export default function EditProfileForm() {
  // const { description } = useSelector(selectUser);
  const [showModal, setShowModal] = useState(false);
  const [descriptionInput, setDescriptionInput] = useState("");
  const dispatch = useDispatch();

  function updateProfile(event) {
    event.preventDefault();
    dispatch(editProfile(descriptionInput));
    setDescriptionInput("");
    setShowModal(false);
  }
  return (
    <div>
      <Button onClick={() => setShowModal(true)}>Edit Profile</Button>
      <Modal size="lg" show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>Edit your Profile</Modal.Header>
        <Modal.Body>
          <Form>
            {/* <Form.Group controlId="formBasicName">
              <Form.Control
                value={fileInput}
                onChange={handleFileInput}
                type="file"
                name="image"
              />
            </Form.Group> */}
            <Form.Group controlId="formBasicName">
              <Form.Label>Description</Form.Label>
              <Form.Control
                value={descriptionInput}
                onChange={(event) => setDescriptionInput(event.target.value)}
                type="input"
                placeholder=""
              />
            </Form.Group>
          </Form>
          {/* {previewSource && (
            <Image
              src={previewSource}
              alt="preview"
              style={{ height: "300px", with: "auto" }}
            />
          )} */}
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
