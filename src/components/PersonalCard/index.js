import React from "react";
import Container from "react-bootstrap/Container";
import { Image, CloudinaryContext, Transformation } from "cloudinary-react";

export default function PersonalCard(props) {
  return (
    <Container>
      <h3>{props.name}</h3>
      <h5>{props.description}</h5>
      <h5>{props.posts} posts</h5>
    </Container>
  );
}
