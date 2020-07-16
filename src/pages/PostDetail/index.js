import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Image, CloudinaryContext } from "cloudinary-react";
import { Row, Col, Container, Modal } from "react-bootstrap";
import "./style.css";
import { AiOutlineClose } from "react-icons/ai";
import { MdComment } from "react-icons/md";

import MiniProfilePic from "../../components/PersonalCard/miniProfilePic";
import { fetchAPost } from "../../store/postDetail/actions";
import { selectPostById } from "../../store/postDetail/selectors";

export default function PostDetail() {
  let history = useHistory();
  const postId = useParams().id;
  const [showModal, setShowModal] = useState(true);
  const dispatch = useDispatch();
  const post = useSelector(selectPostById);
  console.log("user posted this", post.user && post.user.name);
  useEffect(() => {
    dispatch(fetchAPost(postId));
  }, [dispatch, postId]);

  let back = (event) => {
    event.stopPropagation();
    history.goBack();
  };

  return (
    <div>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName="custom-modal"
      >
        <Modal.Body className="modal-body">
          <button
            style={{ border: "none", background: "none" }}
            name="close-modal"
            onClick={back}
          >
            <AiOutlineClose
              style={{
                position: "absolute",
                right: 10,
                top: 10,
              }}
            />
          </button>
          <Container className="modal-container">
            <Row>
              <Col xs={12} md={8}>
                {post.images &&
                  post.images.map((image) => {
                    return (
                      <CloudinaryContext key={image.id}>
                        <Image
                          cloudName="hanhngo"
                          publicId={image.public_Id}
                          width="700"
                          crop="fill"
                        />
                      </CloudinaryContext>
                    );
                  })}
              </Col>
              <Col xs={6} md={4}>
                <Container className="post-detail">
                  <Row className="user-name-card">
                    <Col xs={2}>
                      <MiniProfilePic
                        profile_pic={post.user && post.user.profile_pic}
                      />
                    </Col>{" "}
                    <Col style={{ paddingTop: "0.5rem" }}>
                      <strong>{post.user && post.user.name}</strong>
                    </Col>
                  </Row>
                  <Row className="caption-card">
                    <Col>{post.caption}</Col>
                  </Row>
                  <Row>
                    <Col xs={3}>{post.likes_num} likes</Col>
                    <Col>
                      <MdComment /> {post.comments_num} comments
                    </Col>
                  </Row>

                  {post.comments &&
                    post.comments.map((comment) => {
                      return (
                        <Container className="comment-container">
                          <Row>
                            <Col xs={2}>
                              <MiniProfilePic
                                profile_pic={
                                  comment.user && comment.user.profile_pic
                                }
                              />
                            </Col>
                            <Col style={{ paddingTop: "0.5rem" }}>
                              <strong>
                                {comment.user && comment.user.name}
                              </strong>
                              {"  "}
                              {comment.content}
                            </Col>
                          </Row>
                        </Container>
                      );
                    })}
                </Container>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}
