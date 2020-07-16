import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";
import { Image, CloudinaryContext } from "cloudinary-react";
import { Row, Col, Container, Modal, Button } from "react-bootstrap";
import "./style.css";
import { AiOutlineClose } from "react-icons/ai";
import { MdComment } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import MiniProfilePic from "../../components/PersonalCard/miniProfilePic";
import CommentForm from "../../components/Comments/commentForm";
import { fetchAPost } from "../../store/postDetail/actions";
import { selectPostById } from "../../store/postDetail/selectors";
import { likeAPost, unlikeAPost } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";

export default function PostDetail() {
  let history = useHistory();
  const postId = useParams().id;
  const [showModal, setShowModal] = useState(true);
  const dispatch = useDispatch();
  const post = useSelector(selectPostById);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchAPost(postId));
  }, [dispatch, postId]);

  let back = (event) => {
    event.stopPropagation();
    history.goBack();
  };

  function checkLikedPost() {
    if (user.likes && user.likes.find((like) => like.postId === post.id)) {
      return true;
    } else {
      return false;
    }
  }

  function onClickLikePost(postId) {
    dispatch(likeAPost(postId));
  }
  function onClickUnLikePost(postId) {
    dispatch(unlikeAPost(postId));
  }

  function likeButton() {
    if (checkLikedPost()) {
      return (
        <button
          style={{ border: "none", background: "none" }}
          name="undo like"
          onClick={() => onClickUnLikePost(postId)}
        >
          <FaHeart />
        </button>
      );
    } else {
      return (
        <button
          style={{ border: "none", background: "none" }}
          name="undo like"
          onClick={() => onClickLikePost(postId)}
        >
          <FaRegHeart />
        </button>
      );
    }
  }
  return (
    <div>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName="custom-modal"
      >
        <Modal.Body className="modal-body">
          <Link
            to={user.id !== post.userId ? `/user/${post.userId}` : `/profile`}
          >
            <AiOutlineClose
              style={{
                position: "absolute",
                right: 10,
                top: 10,
              }}
              onClick={back}
            />
          </Link>
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
                    <Col xs={4}>
                      {" "}
                      {likeButton()} {post.likes_num} likes
                    </Col>
                    <Col>
                      <MdComment /> {post.comments_num} comments
                    </Col>
                  </Row>

                  {post.comments &&
                    post.comments.map((comment) => {
                      return (
                        <Container
                          className="comment-container"
                          key={comment.id}
                        >
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
                <Row className="comment-form">
                  <Col xs={14}>
                    <CommentForm postId={post.id} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}
