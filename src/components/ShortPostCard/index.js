import React from "react";
import "./style.css";
import { Image, CloudinaryContext } from "cloudinary-react";
import { Container, Row, Col } from "react-bootstrap";
import { MdComment } from "react-icons/md";

export default function ShortPostCard(props) {
  return (
    <Container
      className="post-wrapper"
      key={props.post.id}
      style={{ width: "20rem" }}
    >
      <Row>
        {props.post.images &&
          props.post.images.map((image) => {
            return (
              <Col
                className="post-area"
                key={image.id}
                md="4"
                style={{ padding: "1rem" }}
              >
                <CloudinaryContext>
                  <Image
                    cloudName="hanhngo"
                    publicId={image.public_Id}
                    width="320"
                    height="320"
                    crop="fill"
                    className="post-image"
                  />{" "}
                </CloudinaryContext>
                <div className="subtitle">
                  {props.post.likes_num} ❤ {props.post.comments_num}{" "}
                  <MdComment />
                </div>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}
