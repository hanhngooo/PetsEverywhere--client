import React, { Fragment } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Card, Row, Col } from "react-bootstrap";
import moment from "moment";
import "./style.css";
import UserNameCard from "../UserNameCard/userNameCard";

export default function Comments(props) {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} type="button" eventKey="1">
          View Comments
        </Accordion.Toggle>
        {props.comments &&
          props.comments.map((comment) => {
            return (
              <Fragment key={comment.id}>
                <Accordion.Collapse key={comment.id} eventKey="1">
                  <Card.Body
                    style={{
                      padding: "1rem",
                      borderBottom: "0.5px solid rgb(233, 233, 233)",
                    }}
                  >
                    <Row>
                      <Col xs={2} md={4}>
                        <UserNameCard
                          profile_pic={comment.user && comment.user.profile_pic}
                          name={comment.user && comment.user.name}
                        />
                      </Col>
                      <Col className="comment-date">
                        {moment(comment.createdAt).format("MMMM Do YYYY")}
                      </Col>
                    </Row>
                    <Row>
                      <div className="commentcontent">{comment.content}</div>
                    </Row>
                  </Card.Body>
                </Accordion.Collapse>
              </Fragment>
            );
          })}
      </Card>
    </Accordion>
  );
}
