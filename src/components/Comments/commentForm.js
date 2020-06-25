import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export default function CommentForm() {
  return (
    <Form as={Col} className="mt-3" md={{ span: 12 }}>
      <Form.Group>
        <Form.Control type="text" placeholder="Add your comment..." />{" "}
      </Form.Group>{" "}
      <Form.Group>
        <Button>Post</Button>
      </Form.Group>
    </Form>
  );
}
