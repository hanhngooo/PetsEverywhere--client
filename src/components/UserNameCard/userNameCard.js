import React from "react";
import "./style.css";
import MiniProfilePic from "./miniProfilePic";
import { Container, Row, Col } from "react-bootstrap";

export default function UserNameCard(props) {
  return (
    <Container>
      <Row>
        <Col className="user-avatar" xs={0}>
          <MiniProfilePic profile_pic={props.profile_pic} />
        </Col>
        <Col className="user-name">
          <strong>{props.name}</strong>
        </Col>
      </Row>
    </Container>
  );
}
