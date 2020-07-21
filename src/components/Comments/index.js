import React, { Fragment } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

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
                  <Card.Body>
                    {/* <MiniProfilePic profile_pic={comment.user.profile_pic} />{" "} */}
                    <UserNameCard
                      profile_pic={comment.user.profile_pic}
                      name={comment.user.name}
                    />
                    <span>
                      {/* <strong>{comment.user.name}</strong> {""}{" "} */}
                      {comment.content}
                    </span>
                  </Card.Body>
                </Accordion.Collapse>
              </Fragment>
            );
          })}
      </Card>
    </Accordion>
  );
}
