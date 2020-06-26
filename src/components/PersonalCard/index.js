import React from "react";
import Container from "react-bootstrap/Container";
import EditProfileForm from "./editProfileForm";
export default function PersonalCard(props) {
  return (
    <Container style={{ padding: "1rem 1rem 1rem 1rem" }}>
      <h3>{props.name}</h3>
      <h5>{props.description}</h5>
      <h5>
        <strong>{props.posts}</strong> posts
      </h5>
      <EditProfileForm />
    </Container>
  );
}
