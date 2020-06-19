import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

import { uploadNewPost } from "../../store/user/actions";

function Upload() {
  const [fileInput, setFileInput] = useState("");
  const [captionInput, setCaptionInput] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const handleFileInput = (event) => {
    const file = event.target.files[0];
    previewFile(file);
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  const uploadFile = (event) => {
    event.preventDefault();
    if (!previewSource) return;
    dispatch(uploadNewPost(previewSource, captionInput));
    setCaptionInput("");
    setPreviewSource("");
    setShowModal(false);
    console.log("how does it look like", previewSource);
  };
  return (
    <div>
      <Button onClick={() => setShowModal(true)}>New Post</Button>
      <Modal size="lg" show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          Upload a cute photo of your pet!
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Control
                value={fileInput}
                onChange={handleFileInput}
                type="file"
                name="image"
              />
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Control
                value={captionInput}
                onChange={(event) => setCaptionInput(event.target.value)}
                type="input"
                name="image"
                placeholder="Write a caption..."
              />
            </Form.Group>
          </Form>
          {previewSource && (
            <Image
              src={previewSource}
              alt="preview"
              style={{ height: "300px", with: "auto" }}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={uploadFile}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Upload;
