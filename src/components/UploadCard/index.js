import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { apiUrl } from "../../config/constants";

function Upload() {
  const [fileInput, setFileInput] = useState("");
  // const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState("");
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
    uploadImage(previewSource);
    console.log("how does it look like", previewSource);
  };
  const uploadImage = async () => {
    console.log();
    try {
      const response = await axios.post(`${apiUrl}/posts/uploadFile`, {
        imageURL: previewSource,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Upload your new photo/video here!</Form.Label>
          <Form.Control
            value={fileInput}
            onChange={handleFileInput}
            type="file"
            name="image"
          />
          <Button onClick={uploadFile}>Upload</Button>
        </Form.Group>
      </Form>
      {previewSource && (
        <img
          src={previewSource}
          alt="image-preview"
          style={{ height: "300px" }}
        />
      )}
    </Container>
  );
}

export default Upload;
