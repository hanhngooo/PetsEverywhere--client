import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { uploadNewPost } from "../../store/user/actions";

function Upload() {
  const [fileInput, setFileInput] = useState("");
  const [captionInput, setCaptionInput] = useState("");
  const [previewSource, setPreviewSource] = useState("");
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
  const [showModal, setShowModal] = useState(false);
  return (
    <Container>
      <Button onClick={() => setShowModal(true)}>New Post</Button>
      <Modal show={showModal}>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Upload your new photo/video here!</Form.Label>
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
          <Button onClick={uploadFile}>Upload</Button>
        </Form>
        {previewSource && (
          <img src={previewSource} alt="preview" style={{ height: "300px" }} />
        )}
      </Modal>
    </Container>
  );
}

export default Upload;
