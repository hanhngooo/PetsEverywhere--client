import React from "react"
import "./style.css"
import { Image, CloudinaryContext, Transformation } from "cloudinary-react"
import { Container, Row, Col } from "react-bootstrap"
import { MdComment } from "react-icons/md"

export default function ShortPostCard(props) {
  return (
    <Container className="post-wrapper" key={props.post.id}>
      <Row>
        {props.post.images &&
          props.post.images.map((image) => {
            return (
              <CloudinaryContext cloudName="hanhngo">
                <Col
                  className="post-area"
                  key={image.id}
                  md="4"
                  style={{
                    padding: "1rem",
                  }}
                >
                  <Image
                    publicId={image.public_Id}
                    className="post-image"
                    responsive
                  >
                    <Transformation width="240" height="240" crop="fill" />
                  </Image>

                  <div className="subtitle">
                    {props.post.likes_num} ❤ {props.post.comments_num}{" "}
                    <MdComment />
                  </div>
                </Col>
              </CloudinaryContext>
            )
          })}
      </Row>
    </Container>
  )
}
