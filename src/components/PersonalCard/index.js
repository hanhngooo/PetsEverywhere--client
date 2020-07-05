import React from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import EditProfileForm from "./editProfileForm";
import { selectUser } from "../../store/user/selectors";
export default function PersonalCard(props) {
  const loggedInUserId = parseInt(useSelector(selectUser).id);
  return (
    <Container style={{ padding: "1rem" }}>
      <h3>{props.name}</h3>
      <h5>{props.description}</h5>
      <h5>
        <strong>{props.posts}</strong> posts
      </h5>
      {loggedInUserId === props.id && <EditProfileForm />}
    </Container>
  );
}
